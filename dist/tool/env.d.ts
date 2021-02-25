/// <reference types="node" />
import { LocalMap } from './localDb';
export declare const env: {
    testing: boolean;
    isDevelopment: boolean;
    localDb: LocalMap;
    setTimeout: (tag: string, callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
    clearTimeout: (handle: NodeJS.Timer) => void;
    setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
    clearInterval: (handle: NodeJS.Timer) => void;
};
