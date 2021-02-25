import * as React from 'react';
interface Props {
    message: string;
    seconds: number;
}
interface State {
    seconds: number;
}
export declare class ReloadPage extends React.Component<Props, State> {
    private timerHandler;
    constructor(props: Props);
    private reload;
    render(): JSX.Element;
}
interface ConfirmReloadPageProps {
    confirm: (ok: boolean) => Promise<void>;
}
export declare const ConfirmReloadPage: (props: ConfirmReloadPageProps) => JSX.Element;
export {};
