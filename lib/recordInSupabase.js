export default function record(
  dataFromLocalStorage,
  setIsRegistered,
  nextStep,
  mailGoogle
) {
  //Account GOOGLE
  if (mailGoogle) {
    const updatedWithGoogleData = {
      ...dataFromLocalStorage,
      email: mailGoogle,
      password: '',
      from: 'recordDataBase',
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedWithGoogleData),
    };

    fetch(`${process.env.CLIENT_URL}/api/recordMemberInfo`, options)
      .then(async (response) => {
        if (response.status === 208) {
          console.log(
            '_MembershipContent4_ New member has been created in db supabase with success :)'
          );
          const response = await fetch(
            `${process.env.CLIENT_URL}/api/mail`,
            options
          );
          const result = await response.json();
          console.log('result', result);
          if (!response.ok) {
            console.log("Sir we've got an error to send the email");
          } else {
            console.log('email envoyé avec success :)');
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
  const updatedWithFrom = {
    ...dataFromLocalStorage,
    from: 'recordDataBase',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedWithFrom),
  };

  fetch(`${process.env.CLIENT_URL}/api/recordMemberInfo`, options)
    .then(async (response) => {
      if (response.status === 208) {
        console.log(
          '_MembershipContent4_ New member has been created in db supabase with success :)'
        );
        const response = await fetch(
          `${process.env.CLIENT_URL}/api/mail`,
          options
        );
        const result = await response.json();
        console.log('result', result);
        if (!response.ok) {
          console.log("Sir we've got an error to send the email");
        } else {
          console.log('email envoyé avec success :)');
        }
        setIsRegistered(true);
        nextStep.onClick(5);
      }
    })
    .catch((error) => {
      console.log('ERROR Sir in _MembershipContent4_ ', error);
    });
}
