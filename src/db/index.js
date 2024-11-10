import mongoose from 'mongoose'
import {dbName} from '../constants.js'

 export const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${ process.env.MONGODB_URI }/${dbName}`)
    console.log("database connected yee!",  connectionInstance.connection.host);
  }catch (error){
    console.log("mongo db failed to connect")
    console.log(error);
    process.exit(1)
  }
}


