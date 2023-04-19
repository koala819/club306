import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (!req.body)
        return res.status(400).json({ message: "Don't have form data...!" });
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
      );
      // console.log('in recordMemberInfo check req.body\n', req.body);
      const {
        address,
        birth_date,
        color,
        email,
        first_name,
        immatriculation,
        last_name,
        model,
        password,
        phone,
        town,
        username,
        zip_code,
      } = req.body;

      /*console.log('check birth_date', birth_date)
      console.log('check {birth_date}', req.body.birth_date)
      console.log('check address', address)
      console.log('check {address}',req.body.address)*/

      if (birth_date !== undefined) {
        const dateParts = birth_date.split('/');
        const rearrangedDate = dateParts.reverse().join('/');
        //  console.log('date formatée\n', rearrangedDate);
        const yy = {
          ...req.body,
          birth_date: rearrangedDate,
        };
        console.log('in recordMemberInfo.js with a good date :)\n', yy);

        try {
          const { data, error } = await supabase.from('members').upsert({
            address,
            birth_date: rearrangedDate,
            car_color: color,
            email,
            first_name:
              first_name.charAt(0).toUpperCase() + first_name.slice(1),
            immatriculation,
            last_name: last_name.toUpperCase(),
            car_model: model,
            password: await bcrypt.hash(password, 12),
            phone,
            town,
            username,
            zip_code,
          });

          if (error) {
            //throw new Error(error);
            console.log('An error Sir when record', error);
          }
          //console.log(data);

          if (data === null) {
            console.log('Great Job !!! User has created successfully :)');
            return res.status(208).json({
              message: 'Great Job !!! User has created successfully :)',
            });
          }
          if (error !== null) {
            console.log('An error Sir !!! :(', error);
            return res.status(408).json({ message: 'Bad news !!!' });
          }
        } catch (error) {
          console.log("Sir we've got an ERROR\n", error);
        }
      } else {
        console.log('Error Sir in recordMemberInfo no birth_date ...');
        return res.status(444).send();
      }
    } else {
      res
        .status(500)
        .json({ message: 'HTTP method not valid only POST Accepted' });
    }
  } catch (error) {
    console.log('Error Sir in recordMemberInfo :: ', error);
    res.json(error);
    res.status(405).end;
  }
}