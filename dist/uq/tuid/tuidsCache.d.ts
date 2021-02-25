import { UqMan } from '../uqMan';
export declare class TuidsCache {
    private readonly uq;
    private modifyMax;
    private cacheTimer;
    constructor(uq: UqMan);
    cacheTuids(defer: number): void;
    private clearCacheTimer;
    private loadIds;
    pullModify(modifyMax: number): void;
    private innerPullModify;
}
