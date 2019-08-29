import { HttpChannel } from './httpChannel';
import { ApiBase } from './apiBase';
export declare function logoutApis(): void;
export declare class UqApi extends ApiBase {
    private access;
    uqOwner: string;
    uqName: string;
    uq: string;
    constructor(basePath: string, uqOwner: string, uqName: string, access: string[], showWaiting?: boolean);
    init(): Promise<void>;
    protected getHttpChannel(): Promise<HttpChannel>;
    loadAccess(): Promise<any>;
    schema(name: string): Promise<any>;
}
export declare function logoutUnitxApis(): void;
export declare class UnitxApi extends UqApi {
    private unitId;
    constructor(unitId: number);
    protected getHttpChannel(): Promise<HttpChannel>;
    private buildChannel;
}
export declare function setCenterUrl(url: string): void;
export declare let centerToken: string | undefined;
export declare function setCenterToken(userId: number, t?: string): void;
export declare abstract class CenterApiBase extends ApiBase {
    constructor(path: string, showWaiting?: boolean);
    protected getHttpChannel(): Promise<HttpChannel>;
}
export declare class UqTokenApi extends CenterApiBase {
    private local;
    uq(params: {
        unit: number;
        uqOwner: string;
        uqName: string;
    }): Promise<any>;
}
export declare const uqTokenApi: UqTokenApi;
export declare class CallCenterApi extends CenterApiBase {
    directCall(url: string, method: string, body: any): Promise<any>;
}
export declare const callCenterapi: CallCenterApi;
export interface UqAppData {
    id: number;
    version: string;
    uqs: UqData[];
}
export interface UqData {
    id: number;
    uqOwner: string;
    uqName: string;
    access: string;
}
export interface UqServiceData {
    id: number;
    db: string;
    url: string;
    urlTest: string;
    token: string;
}
export declare class CenterAppApi extends CenterApiBase {
    private cachedUqs;
    uqs(appOwner: string, appName: string): Promise<UqAppData>;
    private uqsPure;
    checkUqs(appOwner: string, appName: string): Promise<boolean>;
    unitxUq(unit: number): Promise<UqServiceData>;
    changePassword(param: {
        orgPassword: string;
        newPassword: string;
    }): Promise<any>;
}
export declare function loadAppUqs(appOwner: string, appName: string): Promise<UqAppData>;
