/*import {connectPostgreSQL} from '../../../database/conn'*/
import { createClient } from '@supabase/supabase-js'
/*import Users from '../../../model/Schema'*/
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    try {
        /*connectMongo().catch(() => res.json({error: 'Connection Failed...!'}))*/
        /*connectPostgreSQL().catch(() => res.json({error: 'Connection Failed...!'}))*/
        if (req.method === 'POST') {
console.log('in recordMemberInfo with\n',req.body)
            if (!req.body) return res.status(400).json({message: 'Don\'t have form data...!'})
            const {address, birth_date, color, email, first_name, immatriculation, last_name, model, password, phone,
                 town, username, zip_code} = req.body

            /*console.log('in record Member Info with', {first_name, last_name, address, zip_code, town, phone, matriculation,
                birthDateFormatted, color, model, registrationDocument})*/
/*console.log('check in recordMember Info',birthDate)
console.log('check in recordMember Info', typeof birthDate)*/
            //check duplicate users
           /* const checkExisting = await Users.findOne({matriculation})
            if (checkExisting) return res.status(422).json({message: 'User Already Exists...!', status: 422})*/

            //hash pwd
          const supabase = createClient('https://jrebzbunwzmevgctyblb.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

          /*supabase.auth.api.createUser({
              address, birth_date, color, email, first_name, immatriculation, last_name, model, password: await hash(password, 12), phone,
              town, username, zip_code
            })*/

          const { data, error } = await supabase
            .from('members')
            .insert([
              {  address, birth_date, car_color: color, email, first_name, immatriculation, last_name, car_model: model, password, phone,
                town, username, zip_code },
            ])
          /*const { data, error } = await supabase
            .from('members')
            .insert({ id: 154, first_name: username })*/

          console.log('User created successfully : ',data)
             res.send(data);
           console.log('Error creating user : ',error)

          /*
          function(err, data) {
                    console.log('in createUser with',data)
                    if (err) return res.status(404).json({err})
                    res.status(201).json({status: true, user: data})
                }
           */


        } else {
            res.status(500).json({message: 'HTTP method not valid only POST Accepted'})
        }
    } catch (error) {
        res.json(error)
        res.status(405).end
    }
}