import { Entity } from './entity';
import { ActionCaller } from './caller';
export declare class UqAction<P, R> extends Entity {
    get typeName(): string;
    submit(data: P, waiting?: boolean): Promise<any>;
    submitReturns(data: P): Promise<R>;
    submitConvert(data: P): Promise<any>;
}
export declare class Action extends UqAction<any, any> {
}
export declare class ActionSubmitCaller extends ActionCaller {
    get path(): string;
    buildParams(): any;
}
