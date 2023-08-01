import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Machine } from './models/machine.model';
import { MachinesService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @ApiOperation({ summary: 'All Machine' })
  @Get()
  async getAllMachine(): Promise<Machine[]> {
    return this.machinesService.getAllMachine();
  }

  @ApiOperation({ summary: 'Id search Machine' })
  @Get(':id')
  async getMachineById(@Param('id') id: number): Promise<Machine> {
    return this.machinesService.getMachineById(id);
  }

  @ApiOperation({ summary: 'Add Machine' })
  @Post('create')
  async createMachine(@Body() createMachineDto: CreateMachineDto) {
    return this.machinesService.createMachine(createMachineDto);
  }

  @ApiOperation({ summary: 'Update Machine' })
  @Put(':id')
  async updateMachine(
    @Param('id') id: string,
    @Body() updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    return this.machinesService.updateMachine(+id, updateMachineDto);
  }

  @ApiOperation({ summary: 'Delete Machine' })
  @Delete(':id')
  async deleteMachine(@Param('id') id: number): Promise<void> {
    return this.machinesService.deleteMachine(id);
  }
}
