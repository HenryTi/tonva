/// <reference types="react" />
import { VPage } from "../../vm";
import { CForget, CRegBase, CRegister } from './CRegister';
export declare abstract class VStart<T extends CRegBase> extends VPage<T> {
    private schema;
    private uiSchema;
    abstract get accountLable(): string;
    abstract get pageCaption(): string;
    init(): void;
    header(): string;
    content(): JSX.Element;
    private onSubmit;
    private onEnter;
}
export declare class VRegisterStart extends VStart<CRegister> {
    get accountLable(): string;
    get pageCaption(): string;
}
export declare class VForgetStart extends VStart<CForget> {
    footer(): JSX.Element;
    get accountLable(): string;
    get pageCaption(): string;
}
