import { Model } from 'sequelize-typescript';
import { Company } from '../../company/models/company.model';
interface BuilderAttributes {
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
}
export declare class Builder extends Model<Builder, BuilderAttributes> {
    id: number;
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
    company: Company;
}
export {};
