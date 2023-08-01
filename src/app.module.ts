import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';


import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';

import { BuilderModule } from './builder/builder.module';
import { Builder } from './builder/models/builder.model';

import { Machine } from './machine/models/machine.model';
import { MachineModule } from './machine/machine.module';

import { DriverModule } from './driver/driver.module';
import { Driver } from './driver/models/driver.model';

import { Machine_driver } from './machine_driver/models/machine_driver.model';
import { Machine_driverModule } from './machine_driver/machine_driver.module';

import { RolesModule } from './roles/roles.module';
import { Role } from './roles/models/role.model';

import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';

import { UserRoles } from './roles/models/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { Post } from './posts/models/post.model';

import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),

      database: process.env.POSTGRES_DB,
      models: [
        Company,
        Driver,
        Builder,
        Machine,
        Machine_driver,
        User,
        Role,
        UserRoles,
        Post,
      ],
      autoLoadModels: true,
      logging: true,
    }),
    CompanyModule,
    BuilderModule,
    MachineModule,
    Machine_driverModule,
    DriverModule,
    RolesModule,
    UsersModule,
    AuthModule,
    PostsModule,
    PostsModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
