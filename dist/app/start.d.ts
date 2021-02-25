import { AppConfig, CAppBase } from './CAppBase';
export declare function start(CApp: new (config: AppConfig) => CAppBase, appConfig: AppConfig, isUserLogin?: boolean): Promise<void>;
