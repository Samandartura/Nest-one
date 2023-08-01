import { Model } from 'sequelize-typescript';
import { Company } from '../../company/models/company.model';
import { Machine_driver } from 'src/machine_driver/models/machine_driver.model';
interface MachineAttributes {
    id: number;
    name: string;
    companyId: number;
}
export declare class Machine extends Model<Machine, MachineAttributes> {
    id: number;
    name: string;
    companyId: number;
    company: Company;
    machine_driver: Machine_driver[];
}
export {};
