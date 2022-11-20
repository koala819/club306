import {connectMongo} from '../../../database/conn'
import Users from '../../../model/Schema'
import {hash} from 'bcryptjs'

export default async function handler(req, res) {
    try {
        connectMongo().catch(() => res.json({error: 'Connection Failed...!'}))
        if (req.method === 'POST') {

            if (!req.body) return res.status(400).json({message: 'Don\'t have form data...!'})
            const {discoverClub306, first_name, last_name, address, postal_code, town, phone, matriculation} = req.body

            console.log('in record Member Info with', {discoverClub306, first_name, last_name, address, postal_code, town, phone, matriculation})

            //check duplicate users
            const checkExisting = await Users.findOne({email})
            if (checkExisting) return res.status(422).json({message: 'User Already Exists...!', status: 422})

            //hash pwd
            const response =  await Users.create({
                email, password: await hash(password, 12), function(err, data) {
                    if (err) return res.status(404).json({err})
                    res.status(201).json({status: true, user: data})
                }
            })
            res.send(response);


        } else {
            res.status(500).json({message: 'HTTP method not valid only POST Accepted'})
        }
    } catch (error) {
        res.json(error)
        res.status(405).end
    }
}