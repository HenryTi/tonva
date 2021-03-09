/// <reference types="react" />
import { CLogin } from './CLogin';
import { VPage } from '../vm';
export declare class VLogin extends VPage<CLogin> {
    private onLogin;
    private withBack;
    init({ onLogin, withBack }: {
        onLogin: (un: string, pwd: string) => Promise<boolean>;
        withBack: boolean;
    }): void;
    private uiSchema;
    private onSubmit;
    private onEnter;
    header(): false | "登录";
    content(): JSX.Element;
}
