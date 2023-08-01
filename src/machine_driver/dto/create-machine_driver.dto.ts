import { ApiProperty } from "@nestjs/swagger";

export class CreateMachine_driverDto {
  @ApiProperty({ example: 'machineId', description: 'Foylanuvchi Id' })
  machineId: number;

  @ApiProperty({ example: 'driverId', description: 'Foylanuvchi Id' })
  driverId: number;
}
