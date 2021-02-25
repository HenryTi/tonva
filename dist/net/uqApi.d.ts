import { HttpChannel } from './httpChannel';
import { ApiBase } from './apiBase';
export declare function logoutApis(): void;
export declare class UqApi extends ApiBase {
    private access;
    appOwner: string;
    appName: string;
    uqOwner: string;
    uqName: string;
    uq: string;
    constructor(basePath: string, appOwner: string, appName: string, uqOwner: string, uqName: string, access: string[], showWaiting?: boolean);
    init(): Promise<void>;
    protected getHttpChannel(): Promise<HttpChannel>;
    loadAccess(): Promise<any>;
    allSchemas(): Promise<any>;
    schema(name: string): Promise<any>;
    queueModify(start: number, page: number, entities: string): Promise<any>;
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
    protected getHttpChannel(): Promise<HttpChannel>;
}
export declare class UqTokenApi extends CenterApiBase {
    private localMap;
    uq(params: {
        unit: number;
        uqOwner: string;
        uqName: string;
        appOwner: string;
        appName: string;
    }): Promise<any>;
}
export declare const uqTokenApi: UqTokenApi;
export declare class CallCenterApi extends CenterApiBase {
    directCall(url: string, method: string, body: any): Promise<any>;
}
export declare const callCenterapi: CallCenterApi;
export interface UqAppData {
    appName: string;
    appOwner: string;
    id: number;
    version: string;
    uqs: UqData[];
}
export interface UqData {
    id: number;
    uqOwner: string;
    uqName: string;
    access: string;
    newVersion: boolean;
}
export interface UqServiceData {
    id: number;
    db: string;
    url: string;
    urlTest: string;
    token: string;
}
export declare class CenterAppApi extends CenterApiBase {
    uqs(appOwner: string, appName: string): Promise<UqAppData>;
    private uqsPure;
    unitxUq(unit: number): Promise<UqServiceData>;
    changePassword(param: {
        orgPassword: string;
        newPassword: string;
    }): Promise<any>;
}
export declare function loadAppUqs(appOwner: string, appName: string): Promise<UqAppData>;
export interface RegisterParameter {
    nick: string;
    user: string;
    pwd: string;
    country: number;
    mobile: number;
    mobileCountry: number;
    email: string;
    verify: string;
}
export declare class UserApi extends CenterApiBase {
    login(params: {
        user: string;
        pwd: string;
        guest: number;
    }): Promise<any>;
    register(params: RegisterParameter): Promise<any>;
    sendVerify(account: string, type: 'mobile' | 'email', oem: string): Promise<any>;
    checkVerify(account: string, verify: string): Promise<any>;
    isExists(account: string): Promise<any>;
    resetPassword(account: string, password: string, verify: string, type: 'mobile' | 'email'): Promise<any[]>;
    userSetProp(prop: string, value: any): Promise<void>;
    me(): Promise<any>;
    user(id: number): Promise<any>;
    fromKey(key: string): Promise<{
        id: number;
        name: string;
        nick: string;
        icon: string;
    }>;
}
export declare const userApi: UserApi;
