import { User } from '../tool';
export interface Login {
    showLogin(callback?: (user: User) => Promise<void>, withBack?: boolean): void;
    showLogout(callback?: () => Promise<void>): void;
    showChangePassword(): void;
}
export declare function createLogin(): Promise<Login>;
export declare function showRegister(): Promise<void>;
export declare function showForget(): Promise<void>;
