import * as mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    profile:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }
    ,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
});

export default UserSchema;
