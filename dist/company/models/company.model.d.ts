import { Model } from 'sequelize-typescript';
import { Builder } from 'src/builder/models/builder.model';
import { Machine } from 'src/machine/models/machine.model';
interface CompanyAtr {
    name: string;
    adress: string;
    phone: string;
}
export declare class Company extends Model<Company, CompanyAtr> {
    id: number;
    name: string;
    address: string;
    phone: string;
    builders: Builder[];
    machines: Machine[];
}
export {};
