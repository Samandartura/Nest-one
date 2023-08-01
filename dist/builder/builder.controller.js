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
exports.BuilderController = void 0;
const common_1 = require("@nestjs/common");
const builder_service_1 = require("./builder.service");
const create_builder_dto_1 = require("./dto/create-builder.dto");
const update_builder_dto_1 = require("./dto/update-builder.dto");
const swagger_1 = require("@nestjs/swagger");
let BuilderController = exports.BuilderController = class BuilderController {
    constructor(builderService) {
        this.builderService = builderService;
    }
    async getAllBuilder() {
        return this.builderService.getAllBuilder();
    }
    async getBuilderById(id) {
        return this.builderService.getBuilderById(id);
    }
    async createBuilder(createBuilderDto) {
        return this.builderService.createBuilder(createBuilderDto);
    }
    async updateBuilder(id, updateBuilderDto) {
        return this.builderService.updateBuilder(+id, updateBuilderDto);
    }
    async deleteBuilder(id) {
        return this.builderService.deleteBuilder(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Builder' }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "getAllBuilder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Search Builder' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "getBuilderById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Builder' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_builder_dto_1.CreateBuilderDto]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "createBuilder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Builder' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_builder_dto_1.UpdateBuilderDto]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "updateBuilder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Builder' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "deleteBuilder", null);
exports.BuilderController = BuilderController = __decorate([
    (0, common_1.Controller)('builders'),
    __metadata("design:paramtypes", [builder_service_1.BuilderService])
], BuilderController);
//# sourceMappingURL=builder.controller.js.map