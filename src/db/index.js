import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const dbconnect= async ()=>{
 try {
    const connectioninstnace =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`DB connected db name:${connectioninstnace.connection.host}`);

    
 } catch (error) {
    console.log('Error in DB connection',error);
    process.exit(1);
 }
}
export default dbconnect;