import * as React from 'react';
import { Form } from './form';
import { UiSchema, UiItem } from '../schema';
import { ArrSchema, ItemSchema } from '../schema';
import { Widget } from './widgets/widget';
import { ContextRule } from './rules';
export declare abstract class Context {
    private subContexts;
    readonly form: Form;
    readonly uiSchema: UiSchema;
    readonly initData: any;
    readonly inNode: boolean;
    readonly widgets: {
        [name: string]: Widget;
    };
    readonly rules: ContextRule[];
    readonly isRow: boolean;
    errors: string[];
    errorWidgets: Widget[];
    constructor(form: Form, uiSchema: UiSchema, data: any, inNode: boolean, isRow: boolean);
    getArrRowContexts(arrName: string): {
        [rowKey: string]: Context;
    };
    abstract get data(): any;
    abstract getItemSchema(itemName: string): ItemSchema;
    abstract getUiItem(itemName: string): UiItem;
    get arrName(): string;
    getValue(itemName: string): any;
    setValue(itemName: string, value: any): void;
    getDisabled(itemName: string): boolean;
    setDisabled(itemName: string, value: boolean): void;
    getReadOnly(itemName: string): boolean;
    setReadOnly(itemName: string, value: boolean): void;
    getVisible(itemName: string): boolean;
    setVisible(itemName: string, value: boolean): void;
    submit(buttonName: string): Promise<void>;
    checkFieldRules(): void;
    checkContextRules(): void;
    setError(itemName: string, error: string): void;
    clearContextErrors(): void;
    clearWidgetsErrors(): void;
    checkRules(): void;
    addErrorWidget(widget: Widget): void;
    removeErrorWidget(widget: Widget): void;
    protected checkHasError(): boolean;
    get hasError(): boolean;
    clearErrors(): void;
    renderErrors: () => JSX.Element;
}
export declare class RowContext extends Context {
    readonly parentContext: Context;
    readonly arrSchema: ArrSchema;
    readonly rowKey: number;
    readonly data: any;
    constructor(parentContext: Context, arrSchema: ArrSchema, data: any, inNode: boolean);
    getItemSchema(itemName: string): ItemSchema;
    getUiItem(itemName: string): UiItem;
    get arrName(): string;
    clearErrors(): void;
    get parentData(): any;
}
export declare class FormContext extends Context {
    constructor(form: Form, inNode: boolean);
    get data(): any;
    getItemSchema(itemName: string): ItemSchema;
    getUiItem(itemName: string): UiItem;
}
export declare const ContextContainer: React.Context<Context>;
