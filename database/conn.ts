import mongoose from "mongoose";


export async function connectMongo() {
    try {
        // @ts-ignore
        const {connection}: any = await mongoose.connect(process.env.MONGO_URL)

        if (connection?.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}