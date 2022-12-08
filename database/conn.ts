import mongoose from "mongoose";
import  { createClient }  from "@supabase/supabase-js"

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

export async function connectPostgreSQL() {
    try {
        // @ts-ignore
        const {connection}: any = await createClient('https://app.supabase.com/project/jrebzbunwzmevgctyblb', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

        if (connection?.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}