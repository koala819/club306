import Nextauth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
/*import CredentialsProvider from 'next-auth/providers/credentials'
import {connectMongo} from '../../../database/conn'
import Users from '../../../model/Schema'
import {compare} from 'bcryptjs'*/



export default Nextauth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
       /* CredentialsProvider({
            id: 'login',
            name: 'my-project',
            async authorize(credentials) {
                try {
                    connectMongo().catch(() => {
                        'Connection Failed...!'
                    })

                    //check user existance
                    const result = await Users.findOne({email: credentials.email})
                    if (!result) {
                        throw new Error('No User found with email. Please sign up...!')
                    }

                    //compare
                    const checkPwd = await compare(credentials.password, result.password)

                    //incorrect pwd
                    if (!checkPwd || result.email !== credentials.email) {
                        throw new Error('Username or Password doesn\'t match')
                    }

                    return result
                } catch (error) {
                    console.log('Error Sir',error)
                }
            }
        }),
        CredentialsProvider({
            id: 'register',
            name: 'my-project',
            async authorize(credentials) {
                try {

                    connectMongo().catch(() => {
                        'Connection Failed...!'
                    })
                    //create user
                    const result = await Users.create({email: credentials.email, password: credentials.password})
                    //import result = await Users.findOne({email: credentials.email})
                    if (result!== null) {
                        console.log('find ONE',result)
                        throw new Error('User already exist...!')
                    }

                    return result
                } catch (error) {
                    console.log(error)
                }
            }
        })*/
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,

    /*pages: {
        signIn: '/user',
        error: '/api/auth/error',
    },*/
})