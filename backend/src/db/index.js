import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

// DB is in another continent
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! Db Host : ${connectionInstance.connection.host}`);
        
    }catch(error){
        console.log("MONGODB connection Failed : ", error);
        process.exit(1)     // ye node deta hai eske bare me padho

    }
}

export default connectDB;


