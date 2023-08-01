import {  JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing";
import { Role } from "../../roles/models/role.model";
import { RolesServise } from "../../roles/roles.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../models/user.model";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service"
import { userStub } from "./stubs/user.stub";



describe("Users servise",()=>{
  let usersService:UsersService;
  let usersController: UsersController;

  const mockUsersRepository={
    create: jest.fn().mockImplementation(userStub),
    findOne: jest.fn().mockImplementation(userStub),
    findAll: jest.fn().mockImplementation(userStub),
    findByPk: jest.fn().mockImplementation(userStub),
  };
  const mockRolesRepository={
    findOne: jest.fn().mockImplementation((value)=>"ADMIN"),
  };

  beforeAll(async ()=>{
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        RolesServise,
        {
          provide:getModelToken(User),
          useValue: mockRolesRepository
        },
        {
          provide:getModelToken(Role),
          useValue: mockRolesRepository
        },
      ],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
  });
  it("should be defined", ()=>{
    expect(usersService).toBeDefined();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let createUserDto: CreateUserDto;
      let newUser: User;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };
        newUser = await usersService.createUser(createUserDto);
        console.log(newUser);
      });

      it('should be create new user', () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it('then it shuold return user', () => {
        expect(newUser).toMatchObject({...userStub(),roles:["ADMIN"]});
      });
    });
  });

  describe("getOneUser",()=>{
    describe("when getOneUser is called",()=>{
      test("then it should call usersServise",async ()=>{
        expect(await usersService.getUserById(userStub().id)).toEqual(userStub())
      });
    });
  });

   describe("getAllUser",()=>{
    describe("when getAllUser is called",()=>{
      test("then it should call usersServise",async ()=>{
        expect(await usersService.getAllUser()).toEqual(userStub())
      });
    });
  });

  describe("deleteUser",()=>{
    describe("when deleteUser is called",()=>{
      let res: Object;
      beforeAll(async ()=>{
        res = await usersController.deleteUser(userStub().id.toString());
        console.log(res);        
      });

      it("then it shuold call usersService",()=>{
        expect(usersService.deleteUser).toBeCalledWith(userStub().id);
      });
      it("then it return message",()=>{
        expect(res).toEqual({message: "Foydalanuvchi topilmadi"})
      })
    })
  })
});