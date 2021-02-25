import * as React from 'react';
import { TabsProps } from './tabs';
import { ScrollProps, PageWebNav } from './scrollView';
export interface IVPage {
    content(): JSX.Element;
    header(): JSX.Element | string;
    footer(): JSX.Element;
}
export interface PageProps extends ScrollProps {
    back?: 'close' | 'back' | 'none';
    header?: boolean | string | JSX.Element;
    right?: JSX.Element;
    footer?: JSX.Element;
    logout?: boolean | (() => Promise<void>);
    headerClassName?: string;
    className?: string;
    afterBack?: () => void;
    tabsProps?: TabsProps;
    webNav?: PageWebNav;
}
export declare class Page extends React.Component<PageProps> {
    private tabsView;
    constructor(props: PageProps);
    private renderHeader;
    private renderFooter;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): JSX.Element;
}
