import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver)
    private driverRepo: typeof Driver,
  ) {}

  async getAllDrivers(): Promise<Driver[]> {
    return this.driverRepo.findAll();
  }

  async getDriverById(id: number): Promise<Driver> {
    return this.driverRepo.findByPk(id);
  }

  async createDriver(createDriverDto: CreateDriverDto) {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }


  async updateDriver(
    id: number,
    updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    const driver = await this.driverRepo.update(updateDriverDto, {
      where: { id },
      returning: true,
    });
    return driver[1][0].dataValues;
  }

  async deleteDriver(id: number): Promise<void> {
    await this.driverRepo.destroy({ where: { id } });
  }
}
