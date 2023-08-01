import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    getAllCompany(): Promise<Company[]>;
    getCompanyById(id: number): Promise<Company>;
    getCompanyByName(name: string): Promise<Company>;
    deleteCompanyId(id: number): Promise<number>;
    updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
