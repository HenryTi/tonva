/// <reference types="react" />
import { VForm } from '../form';
import { VEntity } from '../CVEntity';
import { Tuid } from '../../uq';
import { TuidUI, CTuidMain } from './cTuid';
export declare type TypeVTuidView = typeof VTuidView;
export declare class VTuidView extends VEntity<Tuid, TuidUI, CTuidMain> {
    vForm: VForm;
    id: number;
    protected buildForm(param: any): void;
    open(param: any): Promise<void>;
    render(param: any): JSX.Element;
    loadId(id: number): Promise<void>;
    protected next: () => Promise<void>;
    protected finish: () => void;
    protected resetForm(): void;
    protected onSubmit: () => Promise<void>;
    protected view: () => JSX.Element;
}