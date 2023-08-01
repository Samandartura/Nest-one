import { ApiProperty } from "@nestjs/swagger";

export class CreateMachineDto {
  @ApiProperty({ example: 'machines', description: 'Foylanuvchi nomi' })
  name: string;

  @ApiProperty({ example: 'compayId', description: 'Foylanuvchi ID' })
  companyId: number;
}
