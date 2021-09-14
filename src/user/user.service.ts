import { Injectable } from '@nestjs/common';
import { UserI } from './interfaces/user.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserI>) {}

  async findAllUsers(): Promise<UserI[]> {
    return await this.userModel.find();
  }

  async findUser(idUser: string): Promise<UserI> {
    return await this.userModel.findOne({ _id: idUser });
  }

  async createUser(userDto: UserI): Promise<UserI> {
    const newUser = new this.userModel(userDto);
    return await newUser.save();
  }

  async updateUser(idUser: string, userDto: UserI): Promise<UserI> {
    return await this.userModel.findByIdAndUpdate(idUser, userDto, {
      new: true,
    });
  }

  async deleteUser(idUser: string): Promise<UserI> {
    return this.userModel.findByIdAndRemove(idUser);
  }
}
