import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from '../models/posts.model';

@Injectable()
export class PostService {
    constructor(
        @Inject('POST_MODEL')
        private readonly postModel: Model<Post>,
    ) { }

    create(post: Post) {
        return this.postModel.create(post);
    }

    findAllByUser(id: string) {
        return this.postModel.findOne({ author: id });
    }

    findAll() {
        return this.postModel.find();
    }

    findOne(id: string) {
        return this.postModel.findById(id);
    }

    update(id: string, post: Post) {
        return this.postModel.findByIdAndUpdate(id, post);
    }

    remove(id: string) {
        return this.postModel.findByIdAndDelete(id);
    }
}
