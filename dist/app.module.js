"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const company_module_1 = require("./company/company.module");
const company_model_1 = require("./company/models/company.model");
const builder_module_1 = require("./builder/builder.module");
const builder_model_1 = require("./builder/models/builder.model");
const machine_model_1 = require("./machine/models/machine.model");
const machine_module_1 = require("./machine/machine.module");
const driver_module_1 = require("./driver/driver.module");
const driver_model_1 = require("./driver/models/driver.model");
const machine_driver_model_1 = require("./machine_driver/models/machine_driver.model");
const machine_driver_module_1 = require("./machine_driver/machine_driver.module");
const roles_module_1 = require("./roles/roles.module");
const role_model_1 = require("./roles/models/role.model");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const user_roles_model_1 = require("./roles/models/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const files_module_1 = require("./files/files.module");
const post_model_1 = require("./posts/models/post.model");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)(__dirname, 'static'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    company_model_1.Company,
                    driver_model_1.Driver,
                    builder_model_1.Builder,
                    machine_model_1.Machine,
                    machine_driver_model_1.Machine_driver,
                    user_model_1.User,
                    role_model_1.Role,
                    user_roles_model_1.UserRoles,
                    post_model_1.Post,
                ],
                autoLoadModels: true,
                logging: true,
            }),
            company_module_1.CompanyModule,
            builder_module_1.BuilderModule,
            machine_module_1.MachineModule,
            machine_driver_module_1.Machine_driverModule,
            driver_module_1.DriverModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
            posts_module_1.PostsModule,
            files_module_1.FilesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map