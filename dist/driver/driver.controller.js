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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const driver_service_1 = require("./driver.service");
const create_driver_dto_1 = require("./dto/create-driver.dto");
const update_driver_dto_1 = require("./dto/update-driver.dto");
const swagger_1 = require("@nestjs/swagger");
let DriverController = exports.DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    async getAllDrivers() {
        return this.driverService.getAllDrivers();
    }
    async getDriverById(id) {
        return this.driverService.getDriverById(id);
    }
    async createDriver(createDriverDto) {
        return this.driverService.createDriver(createDriverDto);
    }
    async updateDriver(id, updateDriverDto) {
        return this.driverService.updateDriver(+id, updateDriverDto);
    }
    async deleteDriver(id) {
        return this.driverService.deleteDriver(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Driver' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getAllDrivers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Driver' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getDriverById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Driver' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_dto_1.CreateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "createDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Driver' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_driver_dto_1.UpdateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "updateDriver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Driver' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "deleteDriver", null);
exports.DriverController = DriverController = __decorate([
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
//# sourceMappingURL=driver.controller.js.map