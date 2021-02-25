/// <reference types="react" />
import { VPage } from '../vm';
import { CLogin } from './CLogin';
export declare class VLogout extends VPage<CLogin> {
    private onLogout;
    init(param: any): void;
    header(): false | "安全退出";
    footer(): JSX.Element;
    protected get back(): 'close' | 'back' | 'none';
    content(): JSX.Element;
}
