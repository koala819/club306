import { Schema, model, models } from 'mongoose'

const userSchema = new Schema( {
    address: String,
    birth_date: String,
    color: String,
    email: String,
    first_name: String,
    immatriculation: String,
    last_name: String,
    model: String,
    password: String,
    phone: String,
    town: String,
    username: String,
    zip_code: String
})

const Users = models.user || model('user',userSchema)

export default Users
