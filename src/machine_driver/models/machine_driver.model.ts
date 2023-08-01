import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Driver } from '../../driver/models/driver.model';
import { Machine } from '../../machine/models/machine.model';

interface Machine_driverAttributes {
  id: number;
  machineId: number;
  driverId: number;
}

@Table({ tableName: 'machine_driver' })
export class Machine_driver extends Model<
  Machine_driver,
  Machine_driverAttributes
> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  machineId: number;

  @BelongsTo(() => Machine)
  machine: Machine;


  @ForeignKey(() => Driver)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  driverId: number;

  @BelongsTo(() => Driver)
  driver: Driver;
}
