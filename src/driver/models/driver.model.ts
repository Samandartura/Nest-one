import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Machine_driver } from '../../machine_driver/models/machine_driver.model';

interface DriverAtr {
  last_name: string;
  first_name: string;
}

@Table({ tableName: 'driver' })
export class Driver extends Model<Driver, DriverAtr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  first_name: string;
  @Column({
    type: DataType.STRING,
  })
  last_name: string;
  @HasMany(() => Machine_driver)
  machine_driver: Machine_driver[];
}
