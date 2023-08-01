import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachinesService {
  constructor(
    @InjectModel(Machine)
    private machineRepo: typeof Machine,
  ) {}

  async getAllMachine(): Promise<Machine[]> {
    return this.machineRepo.findAll({ include: { all: true } });
  }

  async getMachineById(id: number): Promise<Machine> {
    return this.machineRepo.findByPk(id);
  }

  async createMachine(createMachineDto: CreateMachineDto) {
    const machine1 = await this.machineRepo.create(createMachineDto);
    return machine1;
  }


  async updateMachine(
    id: number,
    updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    const machine = await this.machineRepo.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0].dataValues;
  }

  async deleteMachine(id: number): Promise<void> {
    await this.machineRepo.destroy({ where: { id } });
  }
}
