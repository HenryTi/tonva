import { CenterApiBase } from './uqApi';
export declare class GuestApi extends CenterApiBase {
    guest(): Promise<any>;
    unitFromName(unitName: string): Promise<number>;
}
export declare const guestApi: GuestApi;
