import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UserService } from './user.service';
import { UserI } from './interfaces/user.interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get() //  C
  allUsers(): Promise<UserI[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id') //  C
  user(@Param('id') idUser: string): Promise<UserI> {
    return this.userService.findUser(idUser);
  }

  @Post() //  R
  createUser(@Body() userDto: CreateUserDto): Promise<UserI> {
    return this.userService.createUser(userDto);
  }

  @Put(':id') //  U
  updateUser(
    @Param('id') idUser: string,
    @Body() userDto: CreateUserDto,
  ): Promise<UserI> {
    return this.userService.updateUser(idUser, userDto);
  }

  @Delete(':id') //  D
  deleteUser(@Param('id') idUser: string): Promise<UserI> {
    return this.userService.deleteUser(idUser);
  }
}
