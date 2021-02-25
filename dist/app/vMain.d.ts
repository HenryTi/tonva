import { VPage } from '../vm';
import { CAppBase } from "./CAppBase";
export declare class VUnsupportedUnit extends VPage<CAppBase> {
    open(predefinedUnit: number): Promise<void>;
    private page;
}
export declare class VUnitSelect extends VPage<CAppBase> {
    open(): Promise<void>;
    private renderRow;
    private onRowClick;
    private page;
}
export declare class VErrorsPage extends VPage<CAppBase> {
    open(errors: string[]): Promise<void>;
    private page;
}
export declare class VStartError extends VPage<CAppBase> {
    open(error: any): Promise<void>;
    private page;
}
