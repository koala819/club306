import { FormikErrors } from 'formik';

export function contact_validate(values: any) {
  const errors: FormikErrors<FormValues> = {};

  if (!values.email) {
    errors.email = 'Obligatoire';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email incorrecte';
  } else if (values.email === 'alain.proviste@club306.fr') {
    console.log('Veuillez saisir votre adresse mail');
    errors.email = 'Veuillez saisir votre adresse mail';
  }

  if (!values.first_name) {
    errors.first_name = 'Obligatoire';
  } else if (values.first_name === 'AlainP') {
    errors.first_name = 'Veuillez saisir votre prénom';
  }

  if (!values.msg) {
    errors.msg = 'Obligatoire';
  } else if (values.msg.includes('Lorem ipsum')) {
    errors.msg = 'Veuillez saisir votre message';
  }

  return errors;
}

export default function login_validate(values: any) {
  const errors: FormikErrors<FormValues> = {};

  if (!values.email) {
    errors.email = 'Obligatoire';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse mail incorrecte';
  }

  if (!values.password) {
    errors.password = 'Obligatoire';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Doit avoir entre 8 et 20 caractères';
  } else if (values.password.includes(' ')) {
    errors.password = 'Mot de passe invalide';
  }
  return errors;
}

function isDateOlderThan18Years(dateString: string) {
  const today = new Date();
  const inputDate = new Date(dateString);
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  return inputDate <= eighteenYearsAgo;
}

export function membership_validate(values: any) {
  console.log('in membership_validate');
  const errors: FormikErrors<FormValues> = {};

  if (!values.first_name) {
    errors.first_name = 'Veuillez fournir votre Nom';
  }

  if (!values.last_name) {
    errors.last_name = 'Obligatoire';
  }

  if (!values.address) {
    errors.address = 'Obligatoire';
  } else if (values.address.length < 8) {
    errors.address = 'Pas assez de caractères';
  }

  if (!values.zip_code) {
    errors.zip_code = 'Obligatoire';
  } else if (values.zip_code.length !== 5) {
    errors.zip_code = 'Trop ou Pas assez de caractères';
  }

  if (!values.town) {
    errors.town = 'Obligatoire';
  }

  if (!values.phone) {
    errors.phone = 'Obligatoire';
  } else if (values.phone.length !== 10) {
    errors.phone = 'Doit contenir 10 chiffres';
  } else if (values.phone.includes(' ')) {
    errors.password = "Pas d'espace svp ^^";
  }

  /*if (!values.email) {
        errors.email = 'Obligatoire'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Adresse email incorrecte';
    }*/

  if (!values.immatriculation) {
    errors.immatriculation = 'Obligatoire';
  }

  if (!values.birth_date || values.birth_date === 'Invalid Date') {
    errors.birth_date = 'Obligatoire';
  }

  if (!values.model) {
    errors.model = 'Obligatoire';
  }

  if (!values.color) {
    errors.color = 'Obligatoire';
  }

  /*if (!values.registrationDocument) {
        errors.registrationDocument = 'Obligatoire'
    }*/

  if (values.checkCotisation === false) {
    errors.checkCotisation = ' Veuillez valider...!';
  }

  if (values.checkCertificateHonour === false) {
    errors.checkCertificateHonour = ' Veuillez valider...!';
  }

  if (values.checkEngagementClub === false) {
    errors.checkEngagementClub = ' Veuillez valider...!';
  }

  if (values.checkPrivacyPolicy === false) {
    errors.checkPrivacyPolicy = ' Veuillez valider...!';
  }

  return errors;
}

export function personalInfos_validate(values: any) {
  const errors: FormikErrors<FormValues> = {};

  if (!values.first_name) {
    errors.first_name = 'Veuillez fournir votre Nom';
  }

  if (!values.last_name) {
    errors.last_name = 'Veuillez fournir votre Prénom';
  }

  if (!values.address) {
    errors.address = 'Veuillez fournir votre Adresse';
  } else if (values.address.length < 8) {
    errors.address = 'Votre adresse est trop courte';
  }

  if (!values.zip_code) {
    errors.zip_code = 'Veuillez fournir votre Code Postal';
  }

  if (!values.town) {
    errors.town = 'Veuillez fournir votre Ville';
  }

  const checkDate = isDateOlderThan18Years(values.birth_date);

  if (
    (checkDate === false && values.birth_date === '') ||
    (checkDate === true && values.birth_date === null)
  ) {
    errors.birth_date = 'Veillez fournir votre Date de naissance';
  }
  if (checkDate === false && values.birth_date !== '') {
    errors.birth_date = 'Vous devez avoir minimum 18 ans';
  }

  if (!values.phone) {
    errors.phone = 'Veuillez fournir votre Numéro de téléphone';
  } else if (values.phone.length < 11) {
    errors.phone = 'Le numéro de téléphone est trop court';
  }

  if (values.checkCotisation === false) {
    errors.checkCotisation = ' Veuillez approuver la cotisation ...!';
  }

  if (values.checkCertificateHonour === false) {
    errors.checkCertificateHonour =
      " Veuillez approuver sur l'honneur que vous êtes bien propriétaire du véhicule ...!";
  }

  if (values.checkEngagementClub === false) {
    errors.checkEngagementClub = ' Veuillez approuver notre règlement ...!';
  }

  if (values.checkPrivacyPolicy === false) {
    errors.checkPrivacyPolicy =
      ' Veuillez approuver notre politique de confidentialité ...!';
  }

  return errors;
}

export function garage_validate(values: any) {
  console.log('in garage_validate', values);
  const errors: FormikErrors<FormValues> = {};

  if (!values.mine) {
    errors.mine = 'Veuillez fournir votre Code Mine';
  } else if (values.mine.length < 12) {
    errors.mine = 'Code Mine trop court';
  } else if (values.mine.length > 15) {
    errors.mine = 'Code Mine trop long';
  }

  if (!values.immatriculation) {
    errors.immatriculation = 'Veuillez fournir votre Immatriculation';
  } else if (values.immatriculation.length < 9) {
    errors.immatriculation = 'Immatriculation trop courte';
  } else if (values.immatriculation.length > 10) {
    errors.immatriculation = 'Immatriculation trop longue';
  }

  if (!values.model) {
    errors.model = 'Veuillez fournir votre Modèle';
  }

  if (!values.color) {
    errors.color = 'Veuillez fournir votre Couleur';
  }
  if (!values.finition) {
    errors.finition = 'Veuillez fournir votre Finition';
  }

  return errors;
}
export function add_car_validate(values: any, index: number) {
  console.log('in add_car_validate', values);
  console.log('with this index', index);
  const errors: any = {};

  if (!values[`mine-${index}`]) {
    errors[`mine-${index}`] = 'Veuillez fournir votre Code Mine';
  } else if (values.mine.length < 12) {
    errors.mine = 'Code Mine trop court';
  } else if (values.mine.length > 15) {
    errors.mine = 'Code Mine trop long';
  }

  // if (!values.immatriculation) {
  //   errors.immatriculation = 'Veuillez fournir votre Immatriculation';
  // } else if (values.immatriculation.length < 9) {
  //   errors.immatriculation = 'Immatriculation trop courte';
  // } else if (values.immatriculation.length > 10) {
  //   errors.immatriculation = 'Immatriculation trop longue';
  // }

  // if (!values.model) {
  //   errors.model = 'Veuillez fournir votre Modèle';
  // }

  // if (!values.color) {
  //   errors.color = 'Veuillez fournir votre Couleur';
  // }
  // if (!values.finition) {
  //   errors.finition = 'Veuillez fournir votre Finition';
  // }

  return errors;
}

export function register_validate(values: any) {
  const errors: FormikErrors<FormValues> = {};

  /*if (!values.username) {
        errors.username = 'Obligatoire'
    } else if (values.username.includes(' ')) {
        errors.username = 'Nom d\'utilisateur invalide'
    }*/

  if (!values.email) {
    errors.email = 'Obligatoire';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email incorrecte';
  }

  if (!values.password) {
    errors.password = 'Obligatoire';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Doit avoir entre 8 et 20 caractères';
  } else if (values.password.includes(' ')) {
    errors.password = 'Mot de passe invalide';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Obligatoire';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Vous devez saisir le même mot de passe';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Mot de passe invalide';
  }

  return errors;
}

export function rst_pwd(values: any) {
  const errors: FormikErrors<FormValues> = {};

  if (!values.email) {
    errors.email = 'Il est OBLIGATOIRE de remplir ce champ !';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email =
      'Adresse email doit être de la forme jack.scelere@club306.fr';
  }
  return errors;
}

export function change_pwd(values: any) {
  const errors: FormikErrors<FormValues> = {};

  if (!values.pwd) {
    errors.pwd = 'Obligatoire';
  } else if (values.pwd.length < 8 || values.pwd.length > 20) {
    errors.pwd = 'Doit avoir entre 8 et 20 caractères';
  } else if (values.pwd.includes(' ')) {
    errors.pwd = 'Mot de passe invalide';
  }

  if (!values.cpwd) {
    errors.cpwd = 'Obligatoire';
  } else if (values.cpwd !== values.pwd) {
    errors.cpwd = 'Vous devez saisir le même mot de passe';
  } else if (values.cpwd.includes(' ')) {
    errors.cpwd = 'Mot de passe invalide';
  }

  return errors as any;
}

interface FormValues {
  username: string;
  email: string;
  password: string;
  pwd: string;
  cpassword: string;
  cpwd: string;
  first_name: string;
  last_name: string;
  address: string;
  zip_code: string;
  town: string;
  phone: string;
  birth_date: string;
  immatriculation: string;
  model: string;
  msg: string;
  color: string;
  registrationDocument: string;
  checkCotisation: boolean;
  checkCertificateHonour: boolean;
  checkEngagementClub: boolean;
  checkPrivacyPolicy: boolean;
  mine: string;
  finition: string;
}
