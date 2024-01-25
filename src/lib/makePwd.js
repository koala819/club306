const bcrypt = require('bcrypt')

async function makePwd(pwd) {
  try {
    const pwdCrypt = await bcrypt.hash(pwd, 10)
    return pwdCrypt
  } catch (error) {
    console.error('Erreur lors du hachage du mot de passe:', error)
  }
}

// Pour utiliser la fonction avec un argument depuis la ligne de commande
if (process.argv.length === 3) {
  makePwd(process.argv[2])
    .then((hashedPwd) => console.log('Mot de passe haché:', hashedPwd))
    .catch((error) => console.error('Erreur:', error))
} else {
  console.log('Veuillez fournir un mot de passe en argument.')
}
