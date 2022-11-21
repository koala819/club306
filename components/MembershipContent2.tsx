import { useFormik } from 'formik';
import { membership_validate } from '../lib/validate';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


export default function MembershipContent2(props: any) {
  const [value, setValue] = useState(null);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      address: '',
      zip_code: '',
      town: '',
      phone: '',
      matriculation: '',
      birthDate: null,
      color: '',
      model: '',
      submitEvent: '',
      registrationDocument: '',
      checkCotisation: false,
      checkCertificateHonour: false,
      checkEngagementClub: false,
      checkPrivacyPolicy: false
    },
    validate: membership_validate,
    onSubmit
  });
  const toShowError = formik.errors['birthDate'];
useEffect(() => {
  console.log({formik})
},[])
  async function onSubmit(values: any) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };

    await fetch('http://localhost:3000/api/auth/recordMemberInfo', options)
      .then(res => res.json())
      .then(res => {
        if (res.status === 422) {
          alert('Un compte avec cette immatriculation existe déjà... !');
          throw new Error('User already exist...!');
        }
        if (res._id) {
          handleChange(2)
        }
      })
  }

  function handleChange(event: any) {
    console.log('in handleChange',event);
    props.onClick(event);
  }

  return (

    <div>Part II</div>
  );
}