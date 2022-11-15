import {Layout} from '../components/Layout'
import Link from "next/link"
import {HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import {FcGoogle } from 'react-icons/fc'
import { signIn } from "next-auth/react"
import {useFormik} from "formik";
import {NextPage} from "next";
import login_validate from "../lib/validate";

const Login: NextPage = () => {
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate: login_validate,
        onSubmit
    })

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
                        <form action=""
                              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                              onSubmit={formik.handleSubmit}
                        >
                            <div className={`${"flex border rounded-xl relative"} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                                <input type="email"
                                       placeholder="Email"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                                       {...formik.getFieldProps('email')}
                                />
                                <span className="icon flex items-center px-4">
                                    <HiAtSymbol size={25} />
                                </span>
                            </div>
                            {formik.errors.email && formik.touched.email ?<span className='text-rose-500'>{formik.errors.email}</span>:<></>}

                            <div  className={`${"my-3 flex border rounded-xl relative"} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                                <input type="password"
                                       placeholder="Mot de Passe"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                                       {...formik.getFieldProps('password')}
                                />
                                <span className="icon flex items-center px-4">
                                    <HiFingerPrint size={25} />
                                </span>
                            </div>
                            {formik.errors.password && formik.touched.password ?<span className='text-rose-500'>{formik.errors.password}</span>:<></>}

                            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                                <Link href="findPwd">Mot de passe oublié ?</Link>
                            </div>
                            <div className="px-4 pb-2 pt-4">
                                <button
                                    type="submit"
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
    await signIn('google', {callbackUrl: 'https://pascal306.vercel.app'})
}

async function onSubmit(values: any) {
    console.log(values)
}

export default Login