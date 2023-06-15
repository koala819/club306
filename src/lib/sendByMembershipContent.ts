const sendMail = (newMember: newMemberType) => {
  const data = {
    first_name: newMember.first_name,
    last_name: newMember.last_name,
    from: 'recordDataBase',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  fetch(`${process.env.CLIENT_URL}/api/mail`, options)
    .then((response: any) => {
      // console.log('response or Not', response);
      response.status === 200 && console.log('Send mail with SUCCESS :)');
    })
    .catch((error: any) => {
      console.log('ERROR Sir in _contact_ to send the mail', error);
    });
};

const sendWelcomeMail = (newMember: mailForNewMemberType) => {
  const data = {
    first_name: newMember.first_name,
    mail: newMember.email,
    from: 'newMember',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  fetch(`${process.env.CLIENT_URL}/api/mail`, options)
    .then((response: any) => {
      // console.log('response or Not', response);
      response.status === 200 && console.log('Send mail with SUCCESS :)');
    })
    .catch((error: any) => {
      console.log('ERROR Sir in _contact_ to send the mail', error);
    });
};

export { sendMail, sendWelcomeMail };

interface newMemberType {
  first_name: string;
  last_name: string;
}

interface mailForNewMemberType {
  first_name: string;
  email: string;
}
