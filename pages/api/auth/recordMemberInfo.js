import { createClient } from '@supabase/supabase-js';
/*import {connectPostgreSQL} from '../../../database/conn'*/
import { hash } from 'bcryptjs';
import dayjs from 'dayjs';

export default async function handler(req, res) {
  try {
    /*connectPostgreSQL().catch(() => res.json({error: 'Connection Failed...!'}))*/
    if (req.method === 'POST') {
      if (!req.body) return res.status(400).json({ message: 'Don\'t have form data...!' });
      const supabase = createClient('https://jrebzbunwzmevgctyblb.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      const {
        address, birth_date, color, email, first_name, immatriculation, last_name, model, password, phone,
        town, username, zip_code
      } = req.body;

      //check date is good formatted => to deleted
      const yy = {
        ...req.body,
        birth_date: dayjs(birth_date).format('YYYY/MM/DD')
      };
      console.log('in recordMemberInfo.js with\n', yy);


      /*const { dataGoogle, errorGoogle }= supabase.auth.onAuthStateChange(
        (event, session) => {
          console.log('event\n',event,'\n session\n',session)
        })
        async (user) => {
        if (user) {
          // The user has signed in
          // Record the sign-in event in the database
          console.log('user',user)
          await supabase.from('members').insert({
            first_name: 'google'
          });
        } else {
          console.log('no user',user)
          // The user has signed out
          // Do nothing
        }
      });
      console.log('dataGoogle',dataGoogle)
      console.log('errorGoogle',errorGoogle)*/

      //@todo : check duplicate users
      try {
        const { data, error } = await supabase
          .from('members')
          .insert([
            {
              address,
              birth_date: dayjs(birth_date).format('YYYY/MM/DD'),
              car_color: color,
              email,
              first_name,
              immatriculation,
              last_name,
              car_model: model,
              password: await hash(password, 12),
              phone,
              town,
              username,
              zip_code
            }
          ])

        if (data === null) {
          console.log('Great Job !!! User has created successfully :)');
          return res.status(208).json({ message: 'Great Job !!! User has created successfully :)' });
        }
        if (error !== null) {
          console.log('An error Sir !!! :(', error);
          return res.status(408).json({ message: 'Bad news !!!' });
        }
      }
      catch (error){
        console.log('Sir we\'ve got an ERROR\n', error);

      }

    } else {
      res.status(500).json({ message: 'HTTP method not valid only POST Accepted' });
    }
  } catch (error) {
    res.json(error);
    res.status(405).end;
  }
}