import { Model } from 'sequelize-typescript';
import { Driver } from '../../driver/models/driver.model';
import { Machine } from '../../machine/models/machine.model';
interface Machine_driverAttributes {
    id: number;
    machineId: number;
    driverId: number;
}
export declare class Machine_driver extends Model<Machine_driver, Machine_driverAttributes> {
    id: number;
    machineId: number;
    machine: Machine;
    driverId: number;
    driver: Driver;
}
export {};
