import * as React from 'react';
import { User, Guest } from '../tool/user';
import { FetchError } from '../net/fetchError';
import 'font-awesome/css/font-awesome.min.css';
import '../css/va-form.css';
import '../css/va.css';
import '../css/animation.css';
export interface Props {
    onLogined: () => Promise<void>;
    notLogined?: () => Promise<void>;
}
export interface StackItem {
    key: number;
    view: JSX.Element;
    ceased: boolean;
    confirmClose?: () => Promise<boolean>;
    disposer?: () => void;
}
export interface NavViewState {
    stack: StackItem[];
    wait: 0 | 1 | 2;
    fetchError: FetchError;
}
export declare class NavView extends React.Component<Props, NavViewState> {
    private stack;
    private htmlTitle;
    private waitCount;
    private waitTimeHandler?;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    readonly level: number;
    startWait(): void;
    endWait(): void;
    onError(fetchError: FetchError): Promise<void>;
    private upgradeUq;
    showUpgradeUq(uq: string, version: number): Promise<void>;
    show(view: JSX.Element, disposer?: () => void): number;
    push(view: JSX.Element, disposer?: () => void): number;
    replace(view: JSX.Element, disposer?: () => void): number;
    ceaseTop(level?: number): void;
    pop(level?: number): void;
    popTo(key: number): void;
    topKey(): number;
    removeCeased(): void;
    private popAndDispose;
    private dispose;
    clear(): void;
    regConfirmClose(confirmClose: () => Promise<boolean>): void;
    private isHistoryBack;
    navBack(): void;
    back(confirm?: boolean): Promise<void>;
    confirmBox(message?: string): boolean;
    clearError: () => void;
    render(): JSX.Element;
    private refresh;
}
export interface NavSettings {
    oem?: string;
    loginTop?: JSX.Element;
}
export declare class Nav {
    private nav;
    private ws;
    private wsHost;
    private local;
    private navSettings;
    user: User;
    testing: boolean;
    language: string;
    culture: string;
    resUrl: string;
    constructor();
    readonly guest: number;
    set(nav: NavView): void;
    registerReceiveHandler(handler: (message: any) => Promise<void>): number;
    unregisterReceiveHandler(handlerId: number): void;
    onReceive(msg: any): Promise<void>;
    private getPredefinedUnitName;
    private loadPredefinedUnit;
    setSettings(settings?: NavSettings): void;
    readonly oem: string;
    hashParam: string;
    private centerHost;
    private arrs;
    private unitJsonPath;
    start(): Promise<void>;
    showAppView(): Promise<void>;
    setGuest(guest: Guest): void;
    saveLocalUser(): void;
    loadMe(): Promise<void>;
    logined(user: User, callback?: (user: User) => Promise<void>): Promise<void>;
    wsConnect(): void;
    loginTop(defaultTop: JSX.Element): JSX.Element;
    showLogin(callback?: (user: User) => Promise<void>, withBack?: boolean): Promise<void>;
    showLogout(callback?: () => Promise<void>): Promise<void>;
    logout(callback?: () => Promise<void>): Promise<void>;
    changePassword(): Promise<void>;
    readonly level: number;
    startWait(): void;
    endWait(): void;
    onError(error: FetchError): Promise<void>;
    showUpgradeUq(uq: string, version: number): Promise<void>;
    show(view: JSX.Element, disposer?: () => void): void;
    push(view: JSX.Element, disposer?: () => void): void;
    replace(view: JSX.Element, disposer?: () => void): void;
    pop(level?: number): void;
    topKey(): number;
    popTo(key: number): void;
    clear(): void;
    navBack(): void;
    ceaseTop(level?: number): void;
    removeCeased(): void;
    back(confirm?: boolean): Promise<void>;
    regConfirmClose(confirmClose: () => Promise<boolean>): void;
    confirmBox(message?: string): boolean;
    navToApp(url: string, unitId: number, apiId?: number, sheetType?: number, sheetId?: number): Promise<void>;
    navToSite(url: string): void;
    readonly logs: string[];
    log(msg: string): void;
    logMark(): void;
    logStep(step: string): void;
}
export declare const nav: Nav;
