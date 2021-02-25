import React from 'react';
import { PageHeaderProps } from './pageHeader';
export declare class Scroller {
    private el;
    constructor(el: HTMLBaseElement);
    scrollToTop(): void;
    scrollToBottom(): void;
}
export interface ScrollProps {
    onScroll?: (e: any) => void;
    onScrollTop?: (scroller: Scroller) => Promise<boolean>;
    onScrollBottom?: (scroller: Scroller) => Promise<void>;
    className?: string;
}
interface ScrollViewProps extends ScrollProps {
    className?: string;
    style?: React.CSSProperties;
}
declare abstract class ScrollViewBase<T extends ScrollViewProps> extends React.Component<T, null> {
    private bottomTime;
    private topTime;
    private div;
    protected refDiv: (div: HTMLDivElement) => void;
    private onResize;
    protected onScroll: (e: any) => Promise<void>;
    private eachChild;
}
export declare class ScrollView extends ScrollViewBase<ScrollViewProps> {
    render(): JSX.Element;
}
export interface PageWebNav {
    navHeader?: JSX.Element;
    navRawHeader?: JSX.Element;
    navFooter?: JSX.Element;
    navRawFooter?: JSX.Element;
    renderPageHeader?: (props: PageHeaderProps) => JSX.Element;
}
interface WebNavScrollViewProps extends ScrollViewProps {
    webNav: PageWebNav;
}
export declare class WebNavScrollView extends ScrollViewBase<WebNavScrollViewProps> {
    render(): JSX.Element;
}
export {};
