import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostDto } from '../dto';
import { Post } from '../models/posts.model';

@Injectable()
export class PostService {
    constructor(
        @Inject('POST_MODEL')
        private readonly postModel: Model<Post>,
    ) { }

    create(dto: PostDto) {
        return this.postModel.create(dto);
    }

    findAllByUser(id: string) {
        return this.postModel.find({ author: id });
    }

    findAll() {
        return this.postModel.find();
    }

    findOne(id: string) {
        return this.postModel.findById(id);
    }

    update(id: string, dto: PostDto) {
        let updatedPost = this.postModel.findByIdAndUpdate(id, dto);
        if (!updatedPost) throw new BadRequestException('Bad Request');

        return true;
    }

    remove(id: string) {
        return this.postModel.findByIdAndDelete(id);
    }
}
