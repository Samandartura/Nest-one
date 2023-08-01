import { Model } from 'sequelize-typescript';
import { Machine_driver } from 'src/machine_driver/models/machine_driver.model';
interface DriverAtr {
    last_name: string;
    first_name: string;
}
export declare class Driver extends Model<Driver, DriverAtr> {
    id: number;
    first_name: string;
    last_name: string;
    machine_driver: Machine_driver[];
}
export {};
