import * as React from 'react';
export interface SearchBoxProps {
    className?: string;
    label?: string;
    initKey?: string;
    placeholder?: string;
    buttonText?: string;
    maxLength?: number;
    size?: 'sm' | 'md' | 'lg';
    inputClassName?: string;
    onSearch: (key: string) => Promise<void>;
    onFocus?: () => void;
    allowEmptySearch?: boolean;
}
export declare class SearchBox extends React.Component<SearchBoxProps> {
    private input;
    private key;
    private disabled;
    private onChange;
    private onSubmit;
    clear(): void;
    render(): JSX.Element;
}
