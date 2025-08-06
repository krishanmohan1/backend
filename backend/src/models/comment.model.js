import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentShema = new Schema(
    {
        connect: {
            type: String,
            required : true
        },
        video : {
            type : Schema.Types.ObjectId,
            ref : "Video"
        },
        owner : {
            type: Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
)

commentShema.plugin(mongooseAggregatePaginate);
// ye plugin pagination add karne kaam aata hai , like ek bar me kitna comment dikhagea then view more karne me aur aage ka 

export const Comment = mongoose.model("Comment", commentShema)






















