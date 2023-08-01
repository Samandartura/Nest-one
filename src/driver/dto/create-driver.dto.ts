import { ApiProperty } from "@nestjs/swagger";

export class CreateDriverDto {
  @ApiProperty({ example: 'driver_last_name', description: 'Foylanuvchi last_name' })
  last_name: string;

  @ApiProperty({ example: 'driver_first_name', description: 'Foylanuvchi first_name' })
  first_name: string;
}
