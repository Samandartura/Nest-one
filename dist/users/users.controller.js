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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const add_role_dto_1 = require("./dto/add-role.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    addRole(addRoleDto) {
        return this.usersService.addRole(addRoleDto);
    }
    activeUser(addRoleDto) {
        return this.usersService.activateUser(addRoleDto);
    }
    reactiveUser(addRoleDto) {
        return this.usersService.reactivateUser(addRoleDto);
    }
    removeRole(addRoleDto) {
        return this.usersService.removeRole(addRoleDto);
    }
    createUser(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    getAllUser() {
        return this.usersService.getAllUser();
    }
    getUserById(id) {
        return this.usersService.getUserById(+id);
    }
    updateUser(id, updateUserDto) {
        return this.usersService.updateUser(+id, updateUserDto);
    }
    deletUser(id) {
        return this.usersService.deleteUser(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Role add qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('add_role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni acitve qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('active_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "activeUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni reactive qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('reactive_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "reactiveUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Role delete qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('remove_role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchi yaratish' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchi korish' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchilarni Id orqali topish' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchilarni id orqali update qilish' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchilarni id orqali delete qilish' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deletUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Foydalanuvchilar'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map