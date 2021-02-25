import * as React from 'react';
import { FetchError } from '../net/fetchError';
export interface FetchErrorProps extends FetchError {
    clearError: () => void;
}
export default class FetchErrorView extends React.Component<FetchErrorProps, null> {
    private reApi;
    private close;
    render(): JSX.Element;
}
export declare const SystemNotifyPage: ({ message }: {
    message: string;
}) => JSX.Element;
