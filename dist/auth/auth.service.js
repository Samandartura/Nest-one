"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto);
        if (!user) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        return this.generateToken(user);
    }
    async validateUser(loginDto) {
        const user = await this.userService.getUserByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException("Email yoki Parol nato'g'ri");
        }
        const validPassword = await bcrypt.compare(loginDto.password, user.password);
        if (validPassword) {
            return user;
        }
        throw new common_1.UnauthorizedException("Email yoki Parol nato'g'ri");
    }
    async registration(userDto) {
        const condidate = await this.userService.getUserByEmail(userDto.email);
        if (condidate) {
            throw new common_1.HttpException('bundat foydalanuvchi mavjud', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 7);
        const user = await this.userService.createUser({
            ...userDto,
            password: hashedPassword,
        });
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, roles: user.roles };
        return { token: this.jwtService.sign(payload) };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map