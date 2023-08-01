"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine_driverModule = void 0;
const common_1 = require("@nestjs/common");
const machine_driver_controller_1 = require("./machine_driver.controller");
const machine_driver_service_1 = require("./machine_driver.service");
const machine_driver_model_1 = require("./models/machine_driver.model");
const sequelize_1 = require("@nestjs/sequelize");
let Machine_driverModule = exports.Machine_driverModule = class Machine_driverModule {
};
exports.Machine_driverModule = Machine_driverModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([machine_driver_model_1.Machine_driver])],
        controllers: [machine_driver_controller_1.Machines_driverController],
        providers: [machine_driver_service_1.Machines_driverService],
    })
], Machine_driverModule);
//# sourceMappingURL=machine_driver.module.js.map