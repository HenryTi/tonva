/// <reference types="react" />
import { VPage } from "../../vm";
import { CRegBase } from './CRegister';
export declare abstract class VSuccess extends VPage<CRegBase> {
    header(): boolean;
}
export declare class VRegisterSuccess extends VSuccess {
    content(): JSX.Element;
}
export declare class VForgetSuccess extends VSuccess {
    content(): JSX.Element;
}
