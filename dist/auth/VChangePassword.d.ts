/// <reference types="react" />
import { VPage } from '../vm';
import { CLogin } from './CLogin';
export declare class VChangePassword extends VPage<CLogin> {
    private schema;
    private uiSchema;
    private onChange;
    init(onChange: (orgPassword: string, newPassword: string) => Promise<boolean>): void;
    private onSubmit;
    header(): string;
    content(): JSX.Element;
}
