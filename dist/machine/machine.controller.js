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
exports.MachinesController = void 0;
const common_1 = require("@nestjs/common");
const machine_service_1 = require("./machine.service");
const create_machine_dto_1 = require("./dto/create-machine.dto");
const update_machine_dto_1 = require("./dto/update-machine.dto");
const swagger_1 = require("@nestjs/swagger");
let MachinesController = exports.MachinesController = class MachinesController {
    constructor(machinesService) {
        this.machinesService = machinesService;
    }
    async getAllMachine() {
        return this.machinesService.getAllMachine();
    }
    async getMachineById(id) {
        return this.machinesService.getMachineById(id);
    }
    async createMachine(createMachineDto) {
        return this.machinesService.createMachine(createMachineDto);
    }
    async updateMachine(id, updateMachineDto) {
        return this.machinesService.updateMachine(+id, updateMachineDto);
    }
    async deleteMachine(id) {
        return this.machinesService.deleteMachine(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Machine' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "getAllMachine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id search Machine' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "getMachineById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Machine' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_dto_1.CreateMachineDto]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "createMachine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Machine' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_machine_dto_1.UpdateMachineDto]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "updateMachine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Machine' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "deleteMachine", null);
exports.MachinesController = MachinesController = __decorate([
    (0, common_1.Controller)('machines'),
    __metadata("design:paramtypes", [machine_service_1.MachinesService])
], MachinesController);
//# sourceMappingURL=machine.controller.js.map