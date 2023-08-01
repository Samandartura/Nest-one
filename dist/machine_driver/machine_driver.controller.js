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
exports.Machines_driverController = void 0;
const common_1 = require("@nestjs/common");
const machine_driver_service_1 = require("./machine_driver.service");
const create_machine_driver_dto_1 = require("./dto/create-machine_driver.dto");
const update_machine_driver_dto_1 = require("./dto/update-machine_driver.dto");
const swagger_1 = require("@nestjs/swagger");
let Machines_driverController = exports.Machines_driverController = class Machines_driverController {
    constructor(machines_driverService) {
        this.machines_driverService = machines_driverService;
    }
    async getAllMachine_driver() {
        return this.machines_driverService.getAllMachine_driver();
    }
    async getMachine_driverById(id) {
        return this.machines_driverService.getMachine_driverById(id);
    }
    async createMachine(createMachine_driverDto) {
        return this.machines_driverService.createMachine(createMachine_driverDto);
    }
    async updateMachine_driver(id, updateMachine_driverDto) {
        return this.machines_driverService.updateMachine_driver(+id, updateMachine_driverDto);
    }
    async deleteMachine_driver(id) {
        return this.machines_driverService.deleteMachine_driver(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Maniche_driver' }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Machines_driverController.prototype, "getAllMachine_driver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Search Machine Driver' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Machines_driverController.prototype, "getMachine_driverById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Machine_driver' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_driver_dto_1.CreateMachine_driverDto]),
    __metadata("design:returntype", Promise)
], Machines_driverController.prototype, "createMachine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update machine_driver' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_machine_driver_dto_1.UpdateMachine_driverDto]),
    __metadata("design:returntype", Promise)
], Machines_driverController.prototype, "updateMachine_driver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Machine_driver' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Machines_driverController.prototype, "deleteMachine_driver", null);
exports.Machines_driverController = Machines_driverController = __decorate([
    (0, common_1.Controller)('machines_driver'),
    __metadata("design:paramtypes", [machine_driver_service_1.Machines_driverService])
], Machines_driverController);
//# sourceMappingURL=machine_driver.controller.js.map