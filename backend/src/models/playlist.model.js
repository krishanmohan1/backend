import mongoose, { Schema } from "mongoose";

const playListSchema = new Schema({

    name:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    videos :[{      // videos to multiple ragega usko array me stire karenge 
        type: Schema.Types.ObjectId,
        ref: "Video"
    }   
    ],

    owner : {
        type: Schema.type.ObjectId,
        ref : "User"
    }
},{timestamps: true})

export const Playlist = mongoose.model("Playlist", playListSchema)