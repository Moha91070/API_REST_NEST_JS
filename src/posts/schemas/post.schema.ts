import * as mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    message: String,
    author: 
        {
             type: mongoose.Schema.Types.ObjectId,   
             ref: "User"
        }
     
});

export default PostSchema;
