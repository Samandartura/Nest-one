import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine_driver } from './models/machine_driver.model';
import { CreateMachine_driverDto } from './dto/create-machine_driver.dto';
import { UpdateMachine_driverDto } from './dto/update-machine_driver.dto';

@Injectable()
export class Machines_driverService {
  constructor(
    @InjectModel(Machine_driver)
    private machineRepo: typeof Machine_driver,
  ) {}

  async getAllMachine_driver(): Promise<Machine_driver[]> {
    return this.machineRepo.findAll({ include: { all: true } });
  }

  async getMachine_driverById(id: number): Promise<Machine_driver> {
    return this.machineRepo.findByPk(id);
  }

  async createMachine(createMachine_driverDto: CreateMachine_driverDto) {
    const machine1 = await this.machineRepo.create(createMachine_driverDto);
    return machine1;
  }

  async updateMachine_driver(
    id: number,
    updateMachine_driverDto: UpdateMachine_driverDto,
  ): Promise<Machine_driver> {
    const machine = await this.machineRepo.update(updateMachine_driverDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0].dataValues;
  }

  async deleteMachine_driver(id: number): Promise<void> {
    await this.machineRepo.destroy({ where: { id } });
  }
}
