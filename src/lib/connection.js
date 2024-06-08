import mongoose from "mongoose";

let isConnected = false;

async function connectToDatabase() {
    if (!isConnected) {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    }
}
export default connectToDatabase;