import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { BuilderController } from './builder.controller';
import { BuilderService } from './builder.service';
import { Company } from '../company/models/company.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder, Company])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
