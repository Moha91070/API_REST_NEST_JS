import * as mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    user: 
        {
             type: mongoose.Schema.Types.ObjectId,   
             ref: "User"
        }, 
        
     
});

export default ProfileSchema;