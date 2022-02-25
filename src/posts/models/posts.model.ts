import { Connection } from 'mongoose';
import { User } from 'src/users/models/user.model';
import PostSchema from '../schemas/post.schema';

export type Post = {
    message: string;
    author: User;
};

export const PostModel = {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) => connection.model('Post', PostSchema),
    inject: ['DATABASE_CONNECTION'],
};