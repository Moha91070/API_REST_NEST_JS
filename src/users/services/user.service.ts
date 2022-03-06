import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDto } from '../dto';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) { }

  findByCredential(email: string) {
    return this.userModel.findOne({ email });
  }

  create(user: User) {
    return this.userModel.create(user);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, dto: UserDto) {
    let updatedUser = this.userModel.findByIdAndUpdate(id, dto);
    if (!updatedUser) throw new BadRequestException('Bad Request');

    return true;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
