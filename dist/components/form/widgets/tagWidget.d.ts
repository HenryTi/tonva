import * as React from 'react';
import { Widget } from './widget';
import { UiTag } from '../../schema';
declare abstract class TagWidget extends Widget {
    protected inputs: {
        [index: number]: HTMLInputElement;
    };
    protected get ui(): UiTag;
    protected setElementValue(value: any): void;
    setReadOnly(value: boolean): void;
    setDisabled(value: boolean): void;
    abstract render(): JSX.Element;
}
export declare class TagSingleWidget extends TagWidget {
    render(): JSX.Element;
}
export declare class TagMultiWidget extends TagWidget {
    private defaultArr;
    init(): void;
    protected onInputChange: (evt: React.ChangeEvent<any>) => void;
    render(): JSX.Element;
}
export {};
