import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user1', description: 'Foylanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'user1email.uz', description: 'Foylanuvchi emaili' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Uzb&k1s10n', description: 'Foylanuvchi passwordi' })
  @IsStrongPassword()
  password: string;
}
