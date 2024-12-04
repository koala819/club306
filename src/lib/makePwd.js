const bcrypt = require('bcrypt')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function makePwd(pwd) {
  try {
    const pwdCrypt = await bcrypt.hash(pwd, 10)
    return pwdCrypt
  } catch (error) {
    console.error('Erreur lors du hachage du mot de passe:', error)
    throw error
  }
}

async function main() {
  try {
    // Demande le mot de passe à l'utilisateur
    const pwd = await new Promise((resolve) => {
      rl.question('Entrez votre mot de passe : ', (answer) => {
        resolve(answer)
      })
    })

    // Génère le hash
    const hashedPwd = await makePwd(pwd)
    console.log('\nMot de passe haché:', hashedPwd)
  } catch (error) {
    console.error('Erreur:', error)
  } finally {
    rl.close()
  }
}

main()
