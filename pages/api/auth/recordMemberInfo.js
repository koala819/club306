import {connectMongo} from '../../../database/conn'
import Users from '../../../model/Schema'
//import {hash} from 'bcryptjs'

export default async function handler(req, res) {
    try {
        connectMongo().catch(() => res.json({error: 'Connection Failed...!'}))
        if (req.method === 'POST') {

            if (!req.body) return res.status(400).json({message: 'Don\'t have form data...!'})
            const {first_name, last_name, address, zip_code, town, phone, matriculation,
                birthDate, color, model, registrationDocument} = req.body

            /*console.log('in record Member Info with', {first_name, last_name, address, zip_code, town, phone, matriculation,
                birthDateFormatted, color, model, registrationDocument})*/
console.log('check in recordMember Info',birthDate)
console.log('check in recordMember Info', typeof birthDate)
            //check duplicate users
           /* const checkExisting = await Users.findOne({matriculation})
            if (checkExisting) return res.status(422).json({message: 'User Already Exists...!', status: 422})*/

            //hash pwd
            const response =  await Users.create({
                first_name, last_name, address, zip_code, town, phone, matriculation,
                birthDate, color, model, registrationDocument, function(err, data) {
                    console.log('in createUser with',data)
                    if (err) return res.status(404).json({err})
                    res.status(201).json({status: true, user: data})
                }
            })
            console.log('response',response)
            res.send(response);


        } else {
            res.status(500).json({message: 'HTTP method not valid only POST Accepted'})
        }
    } catch (error) {
        res.json(error)
        res.status(405).end
    }
}