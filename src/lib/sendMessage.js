export default async function sendMessage(values) {
  const data = {
    firstName: values.first_name,
    email: values.email,
    message: values.msg,
    from: 'contact',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  console.log('options', options);
  //   fetch(`${process.env.CLIENT_URL}/api/mail`, options)
  //     .then((response) => {
  //       console.log('response or Not', response);
  //       response.status === 200 && console.log('Send mail with SUCCESS :)');
  //       setConfirmationSend(true);
  //     })
  //     .catch((error) => {
  //       console.log('ERROR to send the mail in contact.tsx', error);
  //     });
}
