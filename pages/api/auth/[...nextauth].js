import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {connectMongo} from '../../../database/conn'
import Users from '../../../model/Schema'
import {compare} from 'bcryptjs'


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                try {
                    connectMongo().catch(() => {
                        error: 'Connection Failed...!'
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
                    console.log(error)
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '../register',
    },
})