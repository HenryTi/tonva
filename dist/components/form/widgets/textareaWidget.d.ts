import * as React from 'react';
import { Widget } from './widget';
import { UiTextAreaItem } from '../../schema';
import { StringSchema } from '../../schema';
export declare class TextAreaWidget extends Widget {
    protected get itemSchema(): StringSchema;
    protected input: HTMLTextAreaElement;
    protected get ui(): UiTextAreaItem;
    protected setElementValue(value: any): void;
    protected onInputChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setReadOnly(value: boolean): void;
    setDisabled(value: boolean): void;
    protected onBlur: (evt: React.FocusEvent<any>) => void;
    protected onFocus: (evt: React.FocusEvent<any>) => void;
    render(): JSX.Element;
}
