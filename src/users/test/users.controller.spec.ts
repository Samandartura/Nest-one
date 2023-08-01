import { Test } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');
describe('Users contoller', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('should be defind usersController', () => {
    expect(usersController).toBeDefined();
  });
  it('should be defind usersService', () => {
    expect(usersService).toBeDefined();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };
        user = await usersController.createUser(createUserDto);
        console.log(user);
      });

      it('then it should call usersService', () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it('then it shuold return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("getUserById",()=>{
    describe("when getUserById is called",()=>{
      let user:User;
      beforeAll(async ()=>{
        user = await usersController.getUserById(userStub().id.toString());

      });
      it("then it should call usersService",()=>{
        expect(usersService.getUserById).toHaveBeenCalledWith(userStub().id);
      });
      it("then it should return user", ()=>{
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("getAllUser",()=>{
    describe("when getAllUser is called",()=>{
      let users:User[];
      beforeAll(async ()=>{
        users = await usersController.getAllUser();

      });
      it("then it should call usersService",()=>{
        expect(usersService.getAllUser).toBeCalled();
      });
      it("then it should return user", ()=>{
        expect(users).toEqual([userStub()]);
      });
    });
  });

    describe("deleteUser",()=>{
    describe("when deleteUser is called",()=>{
      let result: Object;
      beforeAll(async ()=>{
        result = await usersController.deleteUser(userStub().id.toString());

      });
      it("then it should call usersService",()=>{
        expect(usersService.deleteUser).toBeCalledWith(userStub().id);
      });
      it("then it should return user", ()=>{
        expect(result).toEqual(userStub());
      });
    });
  });

});
