"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageItemEdit = void 0;
var React = __importStar(require("react"));
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var resUploader_1 = require("../resUploader");
var nav_1 = require("../nav");
var itemEdit_1 = require("./itemEdit");
var ImageItemEdit = /** @class */ (function (_super) {
    __extends(ImageItemEdit, _super);
    function ImageItemEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /*
        private upload = async () => {
            if (!this.resUploader) return;
            let ret = await this.resUploader.upload();
            if (ret === null) {
                this.overSize = true;
                env.setTimeout('imageItemEdit upload', () => this.overSize = false, 3000);
                return;
            }
            this.resId = ret;
            this.isChanged = (this.resId !== this.value);
        }
        */
        _this.page = mobx_react_1.observer(function (props) {
            var resolve = props.resolve;
            var size = _this.uiItem && _this.uiItem.size;
            /*
            let right = <button
                className="btn btn-sm btn-success align-self-center"
                disabled={!this.isChanged}
                onClick={()=>resolve(this.resId)}>保存</button>;
            let overSize:any;
            if (this.overSize === true) {
                overSize = <div className="text-danger">
                    <i className="fa fa-times-circle" /> 图片文件大小超过2M，无法上传
                </div>;
            }
            */
            return React.createElement(resUploader_1.ImageUploader, { label: '更改' + _this.label, id: _this.resId, size: size, onSaved: function (resId) { resolve(resId); return; } });
            /*
            return <Page header={'更改' + this.label} right={right}>
                <div className="my-3 px-3 py-3 bg-white">
                    <div>
                        <div>上传图片：</div>
                        <div className="my-3">
                            <ResUploader ref={v=>this.resUploader=v} multiple={false} maxSize={2048} />
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={this.upload}>上传</button>
                        </div>
                    </div>
                    {overSize}
                    <div className="small muted my-4">支持JPG、GIF、PNG格式图片，不超过2M。</div>
                    <div className="d-flex">
                        <div className="w-12c h-12c mr-4"
                            style={{border: '1px dotted gray', padding: '8px'}}>
                            <Image className="w-100 h-100" src={this.resId} />
                        </div>
                        <div>
                            <div className="small">图片预览</div>
                            <Image className="w-4c h-4c mt-3" src={this.resId} />
                        </div>
                    </div>
                </div>
            </Page>;
            */
        });
        return _this;
    }
    Object.defineProperty(ImageItemEdit.prototype, "uiItem", {
        get: function () { return this._uiItem; },
        enumerable: false,
        configurable: true
    });
    ImageItemEdit.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resId = this.value;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        nav_1.nav.push(React.createElement(_this.page, { resolve: resolve, reject: reject }), function () { return reject(); });
                    })];
            });
        });
    };
    __decorate([
        mobx_1.observable
    ], ImageItemEdit.prototype, "resId", void 0);
    return ImageItemEdit;
}(itemEdit_1.ItemEdit));
exports.ImageItemEdit = ImageItemEdit;
//# sourceMappingURL=imageItemEdit.js.map