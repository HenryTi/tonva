export interface KeyValueRes {
    [key: string]: any;
}
export interface Res<T extends KeyValueRes> {
    [lang: string]: T | {
        [district: string]: T;
    };
}
export declare const resOptions: {
    lang: string;
    $lang: string;
    district: string;
    $district: string;
};
export declare function setResOptions(lang: string, district: string): void;
export declare function resLang<T extends KeyValueRes>(res: Res<T>): T;
export declare function setRes(target: any, res: any): (str: string) => any;
export declare function setGlobalRes(res: any): void;
export declare function t(str: string): any;
