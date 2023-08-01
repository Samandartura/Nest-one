import { ApiProperty } from "@nestjs/swagger";

export class CreateBuilderDto {
  @ApiProperty({ example: 'full_name', description: 'Foylanuvchi name' })
  full_name: string;

  @ApiProperty({
    example: 'Builder Birth_day',
    description: 'Foylanuvchi birth_day',
  })
  bith_day: Date;

  @ApiProperty({ example: 'Builder salary', description: 'Foylanuvchi salary' })
  salary: number;

  @ApiProperty({ example: 'CompanyId', description: 'Foylanuvchi Id' })
  companyId: number;
}
