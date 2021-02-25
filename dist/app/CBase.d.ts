import { Controller, WebNav } from "../vm";
import { IConstructor } from "./CAppBase";
export declare abstract class CBase extends Controller {
    protected readonly _uqs: any;
    protected readonly _cApp: any;
    constructor(cApp: any);
    protected get uqs(): any;
    get cApp(): any;
    hasRole(role: string | number): boolean;
    internalT(str: string): any;
    protected newC<T extends CBase>(type: IConstructor<T>, param?: any): T;
    protected newSub<O extends CBase, T extends CSub<O>>(type: IConstructor<T>, param?: any): T;
    getWebNav(): WebNav<any>;
}
export declare abstract class CSub<T extends CBase> extends CBase {
    protected _owner: T;
    constructor(owner: T);
    internalT(str: string): any;
    protected get owner(): CBase;
    getWebNav(): WebNav<any>;
}
