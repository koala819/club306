import { Schema, model, models } from 'mongoose'

const userSchema = new Schema( {
    username: String,
    first_name: String,
    last_name: String,
    address: String,
    zip_code: String,
    town: String,
    phone: String,
    matriculation: String,
    mail: String,
    birthDate: String,
    color: String,
    model: String,
    registrationDocument: String,
    email: String,
    password: String
})

const Users = models.user || model('user',userSchema)

export default Users
