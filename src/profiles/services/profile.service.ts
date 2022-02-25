import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
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

    update(id: string, profile: Profile) {
        return this.profileModel.findOneAndUpdate({ user: id }, profile);
    }

    remove(id: string) {
        return this.profileModel.findByIdAndDelete(id);
    }
}
