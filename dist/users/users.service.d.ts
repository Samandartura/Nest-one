import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { RolesServise } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
export declare class UsersService {
    private userRepository;
    private readonly roleService;
    constructor(userRepository: typeof User, roleService: RolesServise);
    getAllUser(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
    addRole(addRoleDto: AddRoleDto): Promise<User>;
    removeRole(addRoleDto: AddRoleDto): Promise<User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<User>;
    reactivateUser(activateUserDto: ActivateUserDto): Promise<User>;
}
