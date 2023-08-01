import { Model } from 'sequelize-typescript';
import { Role } from 'src/roles/models/role.model';
interface UserCreateAttrs {
    name: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreateAttrs> {
    id: number;
    email: string;
    password: string;
    is_active: boolean;
    roles: Role[];
}
export {};
