import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Foydalanuvchilar')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Role add qilish' })
  @HttpCode(200)
  @Post('add_role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }

  @ApiOperation({ summary: 'Roleni acitve qilish' })
  @HttpCode(200)
  @Post('active_user')
  activeUser(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.activateUser(addRoleDto);
  }

  @ApiOperation({ summary: 'Roleni reactive qilish' })
  @HttpCode(200)
  @Post('reactive_user')
  reactiveUser(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.reactivateUser(addRoleDto);
  }

  @ApiOperation({ summary: 'Role delete qilish' })
  @HttpCode(200)
  @Post('remove_role')
  removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.removeRole(addRoleDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchi yaratish' })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchi korish' })
  
  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @ApiOperation({ summary: 'Foydalanuvchilarni Id orqali topish' })
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @ApiOperation({ summary: 'Foydalanuvchilarni id orqali update qilish' })
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchilarni id orqali delete qilish' })
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
