export default function login_validate(values: any) {
    const errors = {
        email: '',
        password: ''
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

    return errors
}

export function registerValidate(values: any) {
    const errors = {
        username: '',
        email: '',
        password: '',
        cpassword: ''
    }

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