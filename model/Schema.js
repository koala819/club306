import { Schema, model, models } from 'mongoose'

const userSchema = new Schema( {
    first_name: String,
    last_name: String,
    address: String,
    zip_code: String,
    town: String,
    phone: String,
    matriculation: String,
    birthDate: String,
    color: String,
    model: String,
    registrationDocument: String,
    username: String,
    email: String,
    password: String
})

const Users = models.user || model('user',userSchema)

export default Users
