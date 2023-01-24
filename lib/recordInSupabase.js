
export default function record(dataFromLocalStorage, setIsRegistered, nextStep, mailGoogle) {
  /*console.log('data in recordSupabase', dataFromLocalStorage);
  console.log('data in recordSupabase with Google mail', mailGoogle);*/

  //Account GOOGLE
  if (mailGoogle) {
    const updatedWithGoogleData = {
      ...dataFromLocalStorage,
      email: mailGoogle,
      password: ''
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedWithGoogleData)
    };

	console.log('check is right',`${process.env.CLIENT_URL}/api/auth/recordMemberInfo`)
;
    fetch(`${process.env.CLIENT_URL}/api/auth/recordMemberInfo`, options)
      .then(async (response) => {
        if (response.status === 208) {
          console.log('_MembershipContent4_ New member has been created in db supabase with success :)');
          const response = await fetch(`${process.env.CLIENT_URL}/api/sendMail`, options)
          const result = await response.json();
console.log('ressult',result)
          if(!response.ok) {
            console.log('Sir we\'ve got an error to send the email')
          } else {
            console.log('email envoyé avec success :)')
          }

          setIsRegistered(true);
          nextStep.onClick(5);
        }
      })
      .catch((error) => {
        console.log('ERROR Sir in _MembershipContent4_ ', error);

      });
  }

  //With email and password
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataFromLocalStorage)
  };

  fetch(`${process.env.CLIENT_URL}/api/auth/recordMemberInfo`, options)
    .then((response) => {
      if (response.status === 208) {
        console.log('_MembershipContent4_ New member has been created in db supabase with success :)');
        //sendEmail();
        setIsRegistered(true);
        nextStep.onClick(5);
      }
    })
    .catch((error) => {
      console.log('ERROR Sir in _MembershipContent4_ ', error);

    });
}
