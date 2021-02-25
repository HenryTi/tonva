import { HttpChannelUI } from './httpChannelUI';
import { Caller } from './caller';
export declare abstract class HttpChannel {
    private timeout;
    protected ui?: HttpChannelUI;
    protected hostUrl: string;
    protected apiToken: string;
    constructor(hostUrl: string, apiToken: string, ui?: HttpChannelUI);
    private startWait;
    private endWait;
    private showError;
    used(): void;
    xcall(urlPrefix: string, caller: Caller<any>): Promise<void>;
    private innerFetchResult;
    get(url: string, params?: any, waiting?: boolean): Promise<any>;
    post(url: string, params: any, waiting?: boolean): Promise<any>;
    put(url: string, params: any, waiting?: boolean): Promise<any>;
    delete(url: string, params: any, waiting?: boolean): Promise<any>;
    fetch(url: string, options: any, waiting: boolean, resolve: (value?: any) => any, reject: (reason?: any) => void): Promise<void>;
    protected abstract innerFetch(url: string, options: any, waiting: boolean): Promise<any>;
    callFetch(url: string, method: string, body: any): Promise<any>;
    private buildOptions;
    protected buildHeaders(): {
        [name: string]: string;
    };
}
export declare class CenterHttpChannel extends HttpChannel {
    protected innerFetch(url: string, options: any, waiting: boolean): Promise<any>;
}
export declare class UqHttpChannel extends HttpChannel {
    protected innerFetch(url: string, options: any, waiting: boolean): Promise<any>;
}
