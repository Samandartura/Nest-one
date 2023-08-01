import { Module } from '@nestjs/common';
import { MachinesController } from './machine.controller';
import { Machine } from './models/machine.model';
import { MachinesService } from './machine.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  controllers: [MachinesController],
  providers: [MachinesService],
})
export class MachineModule {}
