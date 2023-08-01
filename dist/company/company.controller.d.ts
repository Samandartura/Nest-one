import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    gaetAllCompany(): Promise<Company[]>;
    getCompaniyById(id: string): Promise<Company>;
    getCompaniyByName(name: string): Promise<Company>;
    deleteCopmanyId(id: string): Promise<number>;
    updateCompany(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
