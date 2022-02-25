import { Connection } from 'mongoose';
import UserSchema from '../schemas/user.schema';

export type User = {
    email: string;
    password: string;
};

export const UserModel = {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
};
