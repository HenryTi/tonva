import { AppConfig } from '../app';
export interface UqAppOptions extends Partial<AppConfig> {
    uqAppName: string;
    uqAppVersion: string;
    uqAppUnitId: number;
    uqAppSrcPath?: string;
    uqOwnerMap?: {
        [key: string]: string;
    };
}
export declare function uqAppStart(options: UqAppOptions): Promise<void>;
export declare function buildUqApp(options: UqAppOptions): Promise<void>;
