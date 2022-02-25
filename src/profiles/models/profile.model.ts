import { Connection } from 'mongoose';
import { User } from 'src/users/models/user.model';
import ProfileSchema from '../schemas/profil.schema';

export type Profile = {
    firstname: String,
    lastname: String,
    user: User;
};

export const ProfileModel = {
    provide: 'PROFILE_MODEL',
    useFactory: (connection: Connection) => connection.model('Profile', ProfileSchema),
    inject: ['DATABASE_CONNECTION'],
};