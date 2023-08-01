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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
let UsersService = exports.UsersService = class UsersService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async getAllUser() {
        return this.userRepository.findAll({ include: { all: true } });
    }
    async getUserById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async createUser(createUserDto) {
        const newUser = await this.userRepository.create(createUserDto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        if (!role) {
            throw new common_1.BadRequestException('Role not found');
        }
        await newUser.$set('roles', [role.id]);
        await newUser.save();
        newUser.roles = [role];
        return newUser;
    }
    async updateUser(id, updateUserDto) {
        const machine = await this.userRepository.update(updateUserDto, {
            where: { id },
            returning: true,
        });
        return machine[1][0].dataValues;
    }
    async deleteUser(id) {
        await this.userRepository.destroy({ where: { id } });
    }
    async addRole(addRoleDto) {
        const user = await this.userRepository.findByPk(addRoleDto.userId);
        const role = await this.roleService.getRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$add('roles', role.id);
            const updateUser = await this.userRepository.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.HttpException('Foydalanuvchi yoki ro topilmadi', common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(addRoleDto) {
        const user = await this.userRepository.findByPk(addRoleDto.userId);
        const role = await this.roleService.getRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$remove('roles', role.id);
            const updateUser = await this.userRepository.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.HttpException('Foydalanuvchi yoki ro topilmadi', common_1.HttpStatus.NOT_FOUND);
    }
    async activateUser(activateUserDto) {
        const user = await this.userRepository.findByPk(activateUserDto.userId);
        if (!user) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        user.is_active = true;
        await user.save();
        return user;
    }
    async reactivateUser(activateUserDto) {
        const user = await this.userRepository.findByPk(activateUserDto.userId);
        if (!user) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        user.is_active = false;
        await user.save();
        return user;
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesServise])
], UsersService);
//# sourceMappingURL=users.service.js.map