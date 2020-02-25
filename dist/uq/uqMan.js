var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import _ from 'lodash';
import { UqApi, UnitxApi, appInFrame } from '../net';
import { TuidImport, TuidInner, TuidsCache } from './tuid';
import { Action } from './action';
import { Sheet } from './sheet';
import { Query } from './query';
import { Book } from './book';
import { History } from './history';
import { Map } from './map';
import { Pending } from './pending';
import { ReactBoxId } from './tuid/reactBoxId';
import { Tag } from './tag/tag';
export function fieldDefaultValue(type) {
    switch (type) {
        case 'tinyint':
        case 'smallint':
        case 'int':
        case 'bigint':
        case 'dec':
            return 0;
        case 'char':
        case 'text':
            return '';
        case 'datetime':
        case 'date':
            return '2000-1-1';
        case 'time':
            return '0:00';
    }
}
export class UqMan {
    constructor(uqs, uqData, createBoxId, tvs) {
        this.actions = {};
        this.sheets = {};
        this.queries = {};
        this.books = {};
        this.maps = {};
        this.histories = {};
        this.pendings = {};
        this.tags = {};
        this.tuids = {};
        this.createBoxIdFromTVs = (tuid, id) => {
            let { name } = tuid;
            /*
            let tuidUR = this.tuidURs[name];
            if (tuidUR === undefined) {
                let {ui, res} = this.getUI(tuid);
                this.tuidURs[name] = tuidUR = new TuidWithUIRes(tuid, ui, res);
            }
            */
            return new ReactBoxId(id, tuid, this.tvs[name]);
        };
        this.tuidArr = [];
        this.actionArr = [];
        this.sheetArr = [];
        this.queryArr = [];
        this.bookArr = [];
        this.mapArr = [];
        this.historyArr = [];
        this.pendingArr = [];
        this.tagArr = [];
        this.createBoxId = createBoxId;
        if (createBoxId === undefined) {
            this.createBoxId = this.createBoxIdFromTVs;
            this.tvs = tvs || {};
        }
        let { id, uqOwner, uqName, access, newVersion: clearTuids } = uqData;
        this.newVersion = clearTuids;
        this.uqOwner = uqOwner;
        this.uqName = uqName;
        this.id = id;
        this.name = uqOwner + '/' + uqName;
        this.uqVersion = 0;
        this.localMap = uqs.localMap.map(this.name);
        this.localModifyMax = this.localMap.child('$modifyMax');
        this.localAccess = this.localMap.child('$access');
        //let hash = document.location.hash;
        let baseUrl = 'tv/';
        let acc;
        if (access === null || access === undefined || access === '*') {
            acc = [];
        }
        else {
            acc = access.split(';').map(v => v.trim()).filter(v => v.length > 0);
        }
        if (this.name === '$$$/$unitx') {
            // 这里假定，点击home link之后，已经设置unit了
            // 调用 UnitxApi会自动搜索绑定 unitx service
            this.uqApi = new UnitxApi(appInFrame.unit);
        }
        else {
            let { appOwner, appName } = uqs;
            this.uqApi = new UqApi(baseUrl, appOwner, appName, uqOwner, uqName, acc, true);
        }
        this.tuidsCache = new TuidsCache(this);
    }
    get entities() {
        return _.merge({}, this.actions, this.sheets, this.queries, this.books, this.maps, this.histories, this.pendings, this.tuids, this.tags);
    }
    tuid(name) { return this.tuids[name.toLowerCase()]; }
    tuidDiv(name, div) {
        let tuid = this.tuids[name.toLowerCase()];
        return tuid && tuid.div(div.toLowerCase());
    }
    action(name) { return this.actions[name.toLowerCase()]; }
    sheet(name) { return this.sheets[name.toLowerCase()]; }
    query(name) { return this.queries[name.toLowerCase()]; }
    book(name) { return this.books[name.toLowerCase()]; }
    map(name) { return this.maps[name.toLowerCase()]; }
    history(name) { return this.histories[name.toLowerCase()]; }
    pending(name) { return this.pendings[name.toLowerCase()]; }
    sheetFromTypeId(typeId) {
        for (let i in this.sheets) {
            let sheet = this.sheets[i];
            if (sheet.typeId === typeId)
                return sheet;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uqApi.init();
        });
    }
    loadEntities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let accesses = this.localAccess.get();
                if (!accesses) {
                    accesses = yield this.uqApi.loadAccess();
                }
                if (!accesses)
                    return;
                this.buildEntities(accesses);
            }
            catch (err) {
                return err;
            }
        });
    }
    /*
    async loadEntities() {
        let accesses = await this.uqApi.loadEntities();
        this.buildEntities(accesses);
    }
    */
    buildEntities(entities) {
        if (entities === undefined) {
            debugger;
        }
        this.localAccess.set(entities);
        let { access, tuids, version } = entities;
        this.uqVersion = version;
        this.buildTuids(tuids);
        this.buildAccess(access);
    }
    /*
    async checkAccess() {
        return await this.uqApi.checkAccess();
    }
    */
    loadEntitySchema(entityName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uqApi.schema(entityName);
        });
    }
    getTuid(name) {
        return this.tuids[name];
    }
    buildTuids(tuids) {
        for (let i in tuids) {
            let schema = tuids[i];
            let { typeId, from } = schema;
            let tuid = this.newTuid(i, typeId, from);
            tuid.sys = true;
        }
        for (let i in tuids) {
            let schema = tuids[i];
            let tuid = this.getTuid(i);
            tuid.setSchema(schema);
        }
        for (let i in this.tuids) {
            let tuid = this.tuids[i];
            tuid.buildFieldsTuid();
        }
    }
    buildAccess(access) {
        for (let a in access) {
            let v = access[a];
            switch (typeof v) {
                case 'string':
                    this.fromType(a, v);
                    break;
                case 'object':
                    this.fromObj(a, v);
                    break;
            }
        }
    }
    cacheTuids(defer) {
        this.tuidsCache.cacheTuids(defer);
    }
    newAction(name, id) {
        let action = this.actions[name];
        if (action !== undefined)
            return action;
        action = this.actions[name] = new Action(this, name, id);
        this.actionArr.push(action);
        return action;
    }
    newTuid(name, id, from) {
        let tuid = this.tuids[name];
        if (tuid !== undefined)
            return tuid;
        if (from !== undefined)
            tuid = new TuidImport(this, name, id, from);
        else
            tuid = new TuidInner(this, name, id);
        this.tuids[name] = tuid;
        this.tuidArr.push(tuid);
        return tuid;
    }
    newQuery(name, id) {
        let query = this.queries[name];
        if (query !== undefined)
            return query;
        query = this.queries[name] = new Query(this, name, id);
        this.queryArr.push(query);
        return query;
    }
    newBook(name, id) {
        let book = this.books[name];
        if (book !== undefined)
            return book;
        book = this.books[name] = new Book(this, name, id);
        this.bookArr.push(book);
        return book;
    }
    newMap(name, id) {
        let map = this.maps[name];
        if (map !== undefined)
            return map;
        map = this.maps[name] = new Map(this, name, id);
        this.mapArr.push(map);
        return map;
    }
    newTag(name, id) {
        let tag = this.tags[name];
        if (tag !== undefined)
            return tag;
        tag = this.tags[name] = new Tag(this, name, id);
        this.tagArr.push(tag);
        return tag;
    }
    newHistory(name, id) {
        let history = this.histories[name];
        if (history !== undefined)
            return;
        history = this.histories[name] = new History(this, name, id);
        this.historyArr.push(history);
        return history;
    }
    newPending(name, id) {
        let pending = this.pendings[name];
        if (pending !== undefined)
            return;
        pending = this.pendings[name] = new Pending(this, name, id);
        this.pendingArr.push(pending);
        return pending;
    }
    newSheet(name, id) {
        let sheet = this.sheets[name];
        if (sheet !== undefined)
            return sheet;
        sheet = this.sheets[name] = new Sheet(this, name, id);
        this.sheetArr.push(sheet);
        return sheet;
    }
    fromType(name, type) {
        let parts = type.split('|');
        type = parts[0];
        let id = Number(parts[1]);
        switch (type) {
            //case 'uq': this.id = id; break;
            case 'tuid':
                // Tuid should not be created here!;
                //let tuid = this.newTuid(name, id);
                //tuid.sys = false;
                break;
            case 'action':
                this.newAction(name, id);
                break;
            case 'query':
                this.newQuery(name, id);
                break;
            case 'book':
                this.newBook(name, id);
                break;
            case 'map':
                this.newMap(name, id);
                break;
            case 'history':
                this.newHistory(name, id);
                break;
            case 'sheet':
                this.newSheet(name, id);
                break;
            case 'pending':
                this.newPending(name, id);
                break;
            case 'tag':
                this.newTag(name, id);
                break;
        }
    }
    fromObj(name, obj) {
        switch (obj['$']) {
            case 'sheet':
                this.buildSheet(name, obj);
                break;
        }
    }
    buildSheet(name, obj) {
        let sheet = this.sheets[name];
        if (sheet === undefined)
            sheet = this.newSheet(name, obj.id);
        sheet.build(obj);
    }
    buildFieldTuid(fields, mainFields) {
        if (fields === undefined)
            return;
        for (let f of fields) {
            let { tuid } = f;
            if (tuid === undefined)
                continue;
            let t = this.getTuid(tuid);
            if (t === undefined)
                continue;
            f._tuid = t.buildTuidBox();
        }
        for (let f of fields) {
            let { owner } = f;
            if (owner === undefined)
                continue;
            let ownerField = fields.find(v => v.name === owner);
            if (ownerField === undefined) {
                if (mainFields !== undefined) {
                    ownerField = mainFields.find(v => v.name === owner);
                }
                if (ownerField === undefined) {
                    debugger;
                    throw new Error(`owner field ${owner} is undefined`);
                }
            }
            let { arr, tuid } = f;
            let t = this.getTuid(ownerField._tuid.tuid.name);
            if (t === undefined)
                continue;
            let div = t.div(arr || tuid);
            f._tuid = div && div.buildTuidDivBox(ownerField);
            if (f._tuid === undefined) {
                debugger;
                throw new Error(`owner field ${owner} is not tuid`);
            }
        }
    }
    buildArrFieldsTuid(arrFields, mainFields) {
        if (arrFields === undefined)
            return;
        for (let af of arrFields) {
            let { fields } = af;
            if (fields === undefined)
                continue;
            this.buildFieldTuid(fields, mainFields);
        }
    }
    pullModify(modifyMax) {
        this.tuidsCache.pullModify(modifyMax);
    }
}
//# sourceMappingURL=uqMan.js.map