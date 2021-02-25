import * as React from 'react';
import { UiTag } from '../schema';
import { ItemEdit } from './itemEdit';
declare abstract class TagItemEdit extends ItemEdit {
    protected inputs: {
        [index: number]: HTMLInputElement;
    };
    protected inputType: 'checkbox' | 'radio';
    get uiItem(): UiTag;
    init(): void;
    protected internalStart(): Promise<any>;
    renderContent(): any;
    protected abstract renderInputs(): JSX.Element;
    private page;
}
export declare class TagSingleItemEdit extends TagItemEdit {
    protected inputType: 'radio' | 'checkbox';
    protected onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    protected renderInputs(): JSX.Element;
}
export declare class TagMultiItemEdit extends TagItemEdit {
    protected inputType: 'radio' | 'checkbox';
    private onInputChange;
    protected renderInputs(): JSX.Element;
}
export {};
