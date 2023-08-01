import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesServise } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RolesServise,
  ) {}

  async getAllUser(): Promise<User[]> {
    return this.userRepository.findAll({ include: { all: true } });
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    if (!role) {
      throw new BadRequestException('Role not found');
    }
    // await newUser.$set('roles', [role.id]);
    // await newUser.save();
    newUser.roles = [role];

    return newUser;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const machine = await this.userRepository.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0].dataValues;
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.destroy({ where: { id } });
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.userRepository.findByPk(addRoleDto.userId);
    const role = await this.roleService.getRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$add('roles', role.id);
      const updateUser = await this.userRepository.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updateUser;
    }
    throw new HttpException(
      'Foydalanuvchi yoki ro topilmadi',
      HttpStatus.NOT_FOUND,
    );
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.userRepository.findByPk(addRoleDto.userId);
    const role = await this.roleService.getRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$remove('roles', role.id);
      const updateUser = await this.userRepository.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updateUser;
    }
    throw new HttpException(
      'Foydalanuvchi yoki ro topilmadi',
      HttpStatus.NOT_FOUND,
    );
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userRepository.findByPk(activateUserDto.userId);
    if (!user) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    user.is_active = true;
    await user.save();
    return user;
  }

  async reactivateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userRepository.findByPk(activateUserDto.userId);
    if (!user) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    user.is_active = false;
    await user.save();
    return user;
  }
}
