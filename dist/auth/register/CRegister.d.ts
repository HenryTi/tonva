import { Controller, VPage } from "../../vm";
export declare abstract class CRegBase extends Controller {
    account: string;
    type: 'mobile' | 'email';
    password: string;
    verify: string;
    protected abstract get VStart(): new (c: Controller) => VPage<any>;
    protected internalStart(): Promise<void>;
    protected get VVerify(): new (c: Controller) => VPage<any>;
    toVerify(): void;
    protected abstract get VPassword(): new (c: Controller) => VPage<any>;
    toPassword(): void;
    protected abstract get VSuccess(): new (c: Controller) => VPage<any>;
    toSuccess(): void;
    login: (account?: string) => Promise<void>;
    checkAccount(): Promise<string>;
    protected abstract accountError(isExists: number): string;
    abstract onPasswordSubmit(pwd: string): Promise<string>;
}
export declare class CRegister extends CRegBase {
    protected get VStart(): new (c: Controller) => VPage<any>;
    protected get VPassword(): new (c: Controller) => VPage<any>;
    protected get VSuccess(): new (c: Controller) => VPage<any>;
    protected accountError(isExists: number): string;
    onPasswordSubmit(pwd: string): Promise<string>;
    private regReturn;
}
export declare class CForget extends CRegBase {
    protected get VStart(): new (c: Controller) => VPage<any>;
    protected get VPassword(): new (c: Controller) => VPage<any>;
    protected get VSuccess(): new (c: Controller) => VPage<any>;
    protected accountError(isExists: number): string;
    onPasswordSubmit(pwd: string): Promise<string>;
}
