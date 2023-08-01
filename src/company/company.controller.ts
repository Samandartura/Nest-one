import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({ summary: 'Add Company' })
  @Post('create')
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @ApiOperation({ summary: 'All Company' })
  @Get('all')
  async gaetAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }

  @ApiOperation({ summary: 'Id Serach Company' })
  @Get(':id')
  async getCompaniyById(@Param('id') id: string): Promise<Company> {
    return this.companyService.getCompanyById(+id);
  }

  @ApiOperation({ summary: 'Name Search Copmany' })
  @Get(':name')
  async getCompaniyByName(@Param('name') name: string): Promise<Company> {
    return this.companyService.getCompanyByName(name);
  }

  @ApiOperation({ summary: 'Delete Copmany' })
  @Delete(':id')
  async deleteCopmanyId(@Param('id') id: string): Promise<number> {
    return this.companyService.deleteCompanyId(+id);
  }

  @ApiOperation({ summary: 'Update Copmany' })
  @Put(':id')
  async updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompany(+id, updateCompanyDto);
  }
}
