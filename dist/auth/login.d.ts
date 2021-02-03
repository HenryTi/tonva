import * as React from 'react';
import { User } from '../tool/user';
export interface LoginProps {
    withBack?: boolean;
    callback?: (user: User) => Promise<void>;
}
export declare class Login extends React.Component<LoginProps> {
    private res;
    private uiSchema;
    private onSubmit;
    private onEnter;
    render(): JSX.Element;
}
