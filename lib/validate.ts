import {FormikErrors} from 'formik'

export default function login_validate(values: any) {
    const errors: FormikErrors<FormValues> = {}

    if (!values.email) {
        errors.email = 'Obligatoire'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Adresse mail incorrecte';
    }

    if (!values.password) {
        errors.password = 'Obligatoire';
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Doit avoir entre 8 et 20 caractères';
    } else if (values.password.includes(' ')) {
        errors.password = 'Mot de passe invalide'
    }
    return errors
}

export function register_validate(values: any) {
    const errors: FormikErrors<FormValues> = {}

    if (!values.username) {
        errors.username = 'Obligatoire'
    } else if (values.username.includes(' ')) {
        errors.username = 'Nom d\'utilisateur invalide'
    }

    if (!values.email) {
        errors.email = 'Obligatoire'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Adresse mail incorrecte';
    }

    if (!values.password) {
        errors.password = 'Obligatoire';
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Doit avoir entre 8 et 20 caractères';
    } else if (values.password.includes(' ')) {
        errors.password = 'Mot de passe invalide'
    }

    if (!values.cpassword) {
        errors.cpassword = 'Obligatoire';
    } else if (values.cpassword !== values.password) {
        errors.cpassword = 'Vous devez saisir le même mot de passe';
    } else if (values.cpassword.includes(' ')) {
        errors.cpassword = 'Mot de passe invalide'
    }

    return errors
}

export function membership_validate(values: any) {
    const errors: FormikErrors<FormValues> = {}

    if (!values.first_name) {
        errors.first_name = 'Obligatoire'
    }

    if (!values.last_name) {
        errors.last_name = 'Obligatoire'
    }

    if (!values.address) {
        errors.address =  'Obligatoire'
    } else if (values.address.length < 8) {
        errors.address = 'Pas assez de caractères'
    }

    if (!values.postal_code) {
        errors.postal_code =  'Obligatoire'
    } else if (values.postal_code.length !== 5 ) {
        errors.postal_code = 'Trop ou Pas assez de caractères'
    }

    if (!values.town) {
        errors.town = 'Obligatoire'
    }

    if (!values.phone) {
        errors.phone =  'Obligatoire'
    } else if (values.phone.length !== 10 ) {
        errors.phone = 'Doit contenir 10 chiffres'
    }  else if (values.phone.includes(' ')) {
        errors.password = 'Pas d\'espace svp ^^'
    }

    if (!values.matriculation) {
        errors.matriculation = 'Obligatoire'
    }


    return errors
}

interface FormValues {
    username: string,
    email: string,
    password: string,
    cpassword: string,
    first_name: string,
    last_name: string,
    address: string,
    postal_code: string,
    town: string,
    phone: string,
    matriculation: string,
}