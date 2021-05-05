import * as React from 'react';
export interface DropdownAction {
    icon?: string;
    caption?: string;
    action?: () => void;
    iconClass?: string;
    captionClass?: string;
}
export interface DropdownActionsProps {
    icon?: string;
    content?: string | JSX.Element;
    actions: DropdownAction[];
    isRight?: boolean;
    className?: string;
    containerClass?: string;
    itemIconClass?: string;
    itemCaptionClass?: string;
}
export interface DropdownActionsState {
    dropdownOpen: boolean;
}
export declare class DropdownActions extends React.Component<DropdownActionsProps, DropdownActionsState> {
    private menu;
    private button;
    constructor(props: DropdownActionsProps);
    private handleDocumentClick;
    private toggle;
    render(): JSX.Element;
}
