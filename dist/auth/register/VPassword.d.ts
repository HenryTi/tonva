/// <reference types="react" />
import { VPage } from "../../vm";
import { CForget, CRegBase, CRegister } from './CRegister';
export declare abstract class VPassword<T extends CRegBase> extends VPage<T> {
    protected abstract get pageCaption(): string;
    protected abstract get submitCaption(): string;
    get account(): string;
    private schema;
    private onButtonSubmit;
    private onEnter;
    header(): string;
    content(): JSX.Element;
}
export declare class VRegisterPassword extends VPassword<CRegister> {
    get pageCaption(): string;
    get submitCaption(): string;
}
export declare class VForgetPassword extends VPassword<CForget> {
    get pageCaption(): string;
    get submitCaption(): string;
}
