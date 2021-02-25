import React from 'react';
import { Controller } from "../controller";
export interface CStringEditProps {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    onValueChange?: (value: string) => Promise<void>;
}
export declare class CStringEdit extends Controller {
    private props;
    value: string;
    private newValue;
    private isChanged;
    private error;
    protected internalStart(): Promise<void>;
    render(value: string, props?: CStringEditProps): React.FunctionComponentElement<{}>;
    protected renderValue(): JSX.Element;
    protected renderPencil(): JSX.Element;
    private onChange;
    private onBlur;
    protected verifyValue(): void;
    private onFocus;
    private onEdit;
}
