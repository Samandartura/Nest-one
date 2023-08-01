import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Driver } from './models/driver.model';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @ApiOperation({ summary: 'All Driver' })
  @Get()
  async getAllDrivers(): Promise<Driver[]> {
    return this.driverService.getAllDrivers();
  }

  @ApiOperation({ summary: 'Id Serach Driver' })
  @Get(':id')
  async getDriverById(@Param('id') id: number): Promise<Driver> {
    return this.driverService.getDriverById(id);
  }

  @ApiOperation({ summary: 'Add Driver' })
  @Post('create')
  async createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @ApiOperation({ summary: 'Update Driver' })
  @Put(':id')
  async updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(+id, updateDriverDto);
  }

  @ApiOperation({ summary: 'Delete Driver' })
  @Delete(':id')
  async deleteDriver(@Param('id') id: number): Promise<void> {
    return this.driverService.deleteDriver(id);
  }
}
