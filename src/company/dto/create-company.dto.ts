import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  @ApiProperty({ example: 'company_name', description: 'Foylanuvchi name' })
  name: string;

  @ApiProperty({
    example: 'company_address',
    description: 'Foylanuvchi address',
  })
  address: string;

  @ApiProperty({ example: 'company_phone', description: 'Foylanuvchi phone' })
  phone: string;
}
