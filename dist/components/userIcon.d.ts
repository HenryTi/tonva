import * as React from 'react';
import { User } from '../tool';
export declare type UserLoader = (userId: number) => Promise<any>;
export declare class UserCache<T> {
    private loader;
    private onLoaded;
    private map;
    constructor(loader: UserLoader);
    use(id: number | any, onLoaded?: (user: User) => void): void;
    getValue(id: number | any): any;
}
export interface UserIconProps {
    id: number;
    className?: string;
    style?: React.CSSProperties;
    altImage?: string;
    noneImage?: any;
}
export declare const UserIcon: (props: UserIconProps) => JSX.Element;
export interface UserViewProps {
    id?: number;
    user?: number | User;
    render: (user: User) => JSX.Element;
    onLoaded?: (user: User) => void;
}
export declare const UserView: (props: UserViewProps) => JSX.Element;
export declare function useUser(id: number | object, onLoaded?: (user: User) => void): void;
