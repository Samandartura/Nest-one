import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepo: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
    const company = await this.companyRepo.create(createCompanyDto);
    return company;
  }

  async getAllCompany(): Promise<Company[]> {
    const comanies = await Company.findAll();
    return comanies;
  }

  async getCompanyById(id: number): Promise<Company> {
    const companyid = await this.companyRepo.findByPk(id);
    // const companyid = await this.companyRepo.findByPk(id);
    return companyid;
  }

  async getCompanyByName(name: string): Promise<Company> {
    const company = await this.companyRepo.findOne({ where: { name } });
    // const companyid = await this.companyRepo.findByPk(id);
    return company;
  }
  async deleteCompanyId(id: number): Promise<number> {
    return this.companyRepo.destroy({ where: { id } });
  }

  async updateCompany(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {
      where: { id },
      returning: true,
    });
    return company[1][0].dataValues;
  }
}
