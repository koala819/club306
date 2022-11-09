import {Layout} from '../components/Layout'
import Link from "next/link"
import {HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import {FcGoogle } from 'react-icons/fc'
import { signIn } from "next-auth/react"

export default function PageName() {
    return (
        <Layout title="Ecran Connexion">
            <section className="min-h-screen flex items-stretch text-white ">
                <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                     style={{backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80)`}}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide">Club 306</h1>
                        <p className="text-3xl my-4">Rejoins nous dans l&apos;aventure Peugeot 306</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
                     style={{backgroundColor: '#161616'}}>

                    <div className="w-full py-6 z-20">

                        <div className="py-6 space-x-2 text-gray-100">
                            Connecte toi
                        </div>
                        <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="flex border rounded-xl relative">
                                <input type="email" name="email" id="email" placeholder="Email"
                                className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"/>
                                <span className="icon flex items-center px-4">
                                    <HiAtSymbol size={25} />
                                </span>
                            </div>

                            <div className="my-3 flex border rounded-xl relative">
                                <input type="password" name="password" id="password" placeholder="Mot de Passe"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"/>
                                <span className="icon flex items-center px-4">
                                    <HiFingerPrint size={25} />
                                </span>
                            </div>

                            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                                <Link href="findPwd">Mot de passe oublié ?</Link>
                            </div>
                            <div className="px-4 pb-2 pt-4">
                                <button
                                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Se Connecter
                                </button>
                            </div>
                            <div className="my-7 flex border rounded-xl relative hover:bg-indigo-600">
                                <button type="button"
                                        onClick={_handleGoogleSignin}
                                        className="w-full m-1 flex justify-center gap-2 ">
                                    Se connecter avec un compte Google
                                </button>
                                <span className="icon flex items-center px-4">
                                    <FcGoogle size={25} />
                                </span>
                            </div>


                            <div className="text-right text-gray-400">
                                Vous n&apos;avez pas encore de compte ?
                                <div className="hover:underline hover:text-gray-100">
                                    <Link href="register">Créez en un</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

async function _handleGoogleSignin() {
    signIn('google',{callbackUrl:'https://pascal306.vercel.app'})
}
/*
<div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Ecran de connexion</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label form="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Addresse mail
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label form="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Mot de Passe
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Envoyer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
 */
