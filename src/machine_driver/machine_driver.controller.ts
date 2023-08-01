import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Machine_driver } from './models/machine_driver.model';
import { Machines_driverService } from './machine_driver.service';
import { CreateMachine_driverDto } from './dto/create-machine_driver.dto';
import { UpdateMachine_driverDto } from './dto/update-machine_driver.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('machines_driver')
export class Machines_driverController {
  constructor(
    private readonly machines_driverService: Machines_driverService,
  ) {}

  @ApiOperation({ summary: 'All Maniche_driver' })
  @Get('all')
  async getAllMachine_driver(): Promise<Machine_driver[]> {
    return this.machines_driverService.getAllMachine_driver();
  }

  @ApiOperation({ summary: 'Id Search Machine Driver' })
  @Get(':id')
  async getMachine_driverById(
    @Param('id') id: number,
  ): Promise<Machine_driver> {
    return this.machines_driverService.getMachine_driverById(id);
  }

  @ApiOperation({ summary: 'Add Machine_driver' })
  @Post('create')
  async createMachine(
    @Body() createMachine_driverDto: CreateMachine_driverDto,
  ) {
    return this.machines_driverService.createMachine(createMachine_driverDto);
  }

  @ApiOperation({ summary: 'Update machine_driver' })
  @Put(':id')
  async updateMachine_driver(
    @Param('id') id: string,
    @Body() updateMachine_driverDto: UpdateMachine_driverDto,
  ): Promise<Machine_driver> {
    return this.machines_driverService.updateMachine_driver(
      +id,
      updateMachine_driverDto,
    );
  }

  @ApiOperation({ summary: 'Delete Machine_driver' })
  @Delete(':id')
  async deleteMachine_driver(@Param('id') id: number): Promise<void> {
    return this.machines_driverService.deleteMachine_driver(id);
  }
}
