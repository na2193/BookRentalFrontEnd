import { Role } from "./roles";

export interface User {
    id: number,
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    roles: Array<Role>;
    roleName: string;
}