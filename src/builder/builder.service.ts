import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Injectable()
export class BuilderService {
  constructor(
    @InjectModel(Builder)
    private builderRepo: typeof Builder,
  ) {}

  async getAllBuilder(): Promise<Builder[]> {
    const comanies = await Builder.findAll({include:{all:true}});
    return comanies;
  }

  async getBuilderById(id: number): Promise<Builder> {
    return this.builderRepo.findByPk(id);
  }

  async createBuilder(createBuilderDto: CreateBuilderDto) {
    const company = await this.builderRepo.create(createBuilderDto);
    return company;
  }

  async updateBuilder(
    id: number,
    updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    const builder = await this.builderRepo.update(updateBuilderDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async deleteBuilder(id: number): Promise<void> {
    await this.builderRepo.destroy({ where: { id } });
  }
}
