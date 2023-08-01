import { Module } from '@nestjs/common';
import { Machines_driverController } from './machine_driver.controller';
import { Machines_driverService } from './machine_driver.service';
import { Machine_driver } from './models/machine_driver.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Machine_driver])],
  controllers: [Machines_driverController],
  providers: [Machines_driverService],
})
export class Machine_driverModule {}
