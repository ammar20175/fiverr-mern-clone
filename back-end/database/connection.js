import mongoose from "mongoose";
import { MONGO_URL } from "../config";

const url = MONGO_URL
mongoose.set('strictQuery', true)

async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log('connected to database.')
    } catch (error) {
        console.log(`this is database error ${error}`)
    }
}

export default connectDB;