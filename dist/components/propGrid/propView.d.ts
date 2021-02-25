/// <reference types="react" />
import { PropGridProps } from './PropGrid';
export interface Format {
}
export interface PropBase {
    onClick?: () => void;
}
export interface LabeledProp extends PropBase {
    label?: string;
    bk?: string;
    vAlign?: 'top' | 'bottom' | 'center' | 'stretch';
}
export interface StringProp extends LabeledProp {
    type: 'string';
    name: string;
}
export interface NumberProp extends LabeledProp {
    type: 'number';
    name: string;
}
export interface FormatProp extends LabeledProp {
    type: 'format';
    format: Format;
}
export interface ListProp extends LabeledProp {
    type: 'list';
    list: string | any[];
    row: new (props: any) => React.Component;
}
export interface ComponentProp extends LabeledProp {
    type: 'component';
    full?: boolean;
    component: any;
}
export declare type Prop = StringProp | NumberProp | FormatProp | ListProp | ComponentProp | string;
export declare class PropView {
    private gridProps;
    private props;
    private rows;
    constructor(gridProps: PropGridProps, props: Prop[]);
    private buildRows;
    setValues(values: any): void;
    render(): any[];
}
