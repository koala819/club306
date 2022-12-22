export default function record(dataFromLocalStorage, setIsRegistered, nextStep, mailGoogle) {
  console.log('data in recordSupabase', dataFromLocalStorage);
  console.log('data in recordSupabase with Google mail', mailGoogle);

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

    fetch(`${process.env.CLIENT_URL}/api/auth/recordMemberInfo`, options)
      .then((response) => {
        if (response.status === 208) {
          console.log('_MembershipContent4_ New member has been created in db supabase with success :)');
          setIsRegistered(true);
          nextStep.onClick(5);
        }
      })
      .catch((error) => {
        console.log('ERROR Sir in _MembershipContent4_ ', error);

      });
  }
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataFromLocalStorage)
  };

  fetch(`${process.env.CLIENT_URL}/api/auth/recordMemberInfo`, options)
    .then((response) => {
      if (response.status === 208) {
        console.log('_MembershipContent4_ New member has been created in db supabase with success :)');
        setIsRegistered(true);
        nextStep.onClick(5);
      }
    })
    .catch((error) => {
      console.log('ERROR Sir in _MembershipContent4_ ', error);

    });
}