import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addRole(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    activeUser(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    reactiveUser(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    removeRole(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./models/user.model").User>;
    getAllUser(): Promise<import("./models/user.model").User[]>;
    getUserById(id: string): Promise<import("./models/user.model").User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("./models/user.model").User>;
    deletUser(id: string): Promise<void>;
}
