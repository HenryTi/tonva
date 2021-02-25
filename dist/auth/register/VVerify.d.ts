/// <reference types="react" />
import { VPage } from "../../vm";
import { CRegBase } from "./CRegister";
export declare class VVerify extends VPage<CRegBase> {
    private schema;
    private onVerifyChanged;
    private uiSchema;
    private onVerify;
    init(onVerify: (verify: string) => Promise<number>): void;
    private onSubmit;
    private onEnter;
    header(): string;
    content(): JSX.Element;
}
