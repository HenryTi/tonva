/// <reference types="react" />
import { Scroller, TabsProps } from "../components";
import { View } from "./view";
import { Controller } from "./controller";
export declare abstract class VPage<C extends Controller> extends View<C> {
    protected retOnClosePage: any;
    open(param?: any, onClosePage?: (ret: any) => void): Promise<void>;
    replaceOpen(param?: any, onClosePage?: (ret: any) => void): Promise<void>;
    render(param?: any): JSX.Element;
    init(param?: any): void;
    header(): string | boolean | JSX.Element;
    right(): JSX.Element;
    content(): JSX.Element;
    footer(): JSX.Element;
    logout(): boolean | (() => Promise<void>);
    protected renderPage(): JSX.Element;
    protected onPageScroll(e: any): void;
    protected onPageScrollTop(scroller: Scroller): Promise<boolean>;
    protected onPageScrollBottom(scroller: Scroller): Promise<void>;
    protected afterBack(): void;
    protected get back(): 'close' | 'back' | 'none';
    protected get headerClassName(): string;
    protected get className(): string;
    protected get tabsProps(): TabsProps;
}
