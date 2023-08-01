import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-auth.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    private validateUser;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
