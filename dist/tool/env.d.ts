/// <reference types="node" />
import { LocalMap } from './localDb';
export declare const env: {
    unit: number;
    testing: boolean;
    params: {
        [key: string]: string;
    };
    lang: string;
    district: string;
    timeZone: number;
    browser: string;
    isDevelopment: boolean;
    localDb: LocalMap;
    setTimeout: (tag: string, callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
    clearTimeout: (handle: NodeJS.Timer) => void;
    setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
    clearInterval: (handle: NodeJS.Timer) => void;
};
