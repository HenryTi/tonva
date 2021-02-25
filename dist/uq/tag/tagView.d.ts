/// <reference types="react" />
import { IValuesView, IValuesViewRenderOptions } from '../../components';
import { Tag } from './tag';
export declare class TagView implements IValuesView {
    private tag;
    constructor(tag: Tag);
    render(values: number | string): JSX.Element;
    renderRadios(value: number, options: IValuesViewRenderOptions): JSX.Element;
    renderChecks(values: string, options: IValuesViewRenderOptions): JSX.Element;
    private renderView;
    private renderRadio;
    private renderCheck;
}
