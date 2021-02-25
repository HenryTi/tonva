import * as React from 'react';
export interface PageHeaderProps {
    back?: 'back' | 'close' | 'none';
    center: string | JSX.Element;
    right?: JSX.Element;
    logout?: boolean | (() => Promise<void>);
    className?: string;
    afterBack?: () => void;
    ex?: JSX.Element;
}
export declare function renderPageHeader(props: PageHeaderProps, inWebNav?: boolean): JSX.Element;
export declare class PageHeader extends React.Component<PageHeaderProps> {
    render(): JSX.Element;
}
