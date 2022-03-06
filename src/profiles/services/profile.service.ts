import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdateProfile } from '../dto';
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
    constructor(
        @Inject('PROFILE_MODEL')
        private readonly profileModel: Model<Profile>,
    ) { }

    create(profile: Profile) {
        return this.profileModel.create(profile);
    }

    findAllByUser(id: string) {
        return this.profileModel.findOne({ user: id });
    }

    findAll() {
        return this.profileModel.find();
    }

    findOne(id: string) {
        return this.profileModel.findById(id);
    }

    update(id: string, dto: UpdateProfile) {
        const updatedProfile = this.profileModel.findOneAndUpdate({ user: id }, dto);
        if (!updatedProfile) throw new BadRequestException('Bad Request');

        return true; 
    }

    remove(id: string) {
        return this.profileModel.findByIdAndDelete(id);
    }
}
