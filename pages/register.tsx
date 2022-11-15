import {Layout} from '../components/Layout'
import {HiAtSymbol, HiFingerPrint, HiOutlineUser} from "react-icons/hi";
import { useState} from 'react';
import Link from "next/link";
import {useFormik} from "formik";
import {register_validate} from "../lib/validate";

export default function Register()  {


    const [show,setShow]=useState({password:false, cpassword:false})
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword:''
        },
        onSubmit,
        validate: register_validate
    })
    async function onSubmit(values: any) {
        console.log('hello',values)
    }

    return (
        <Layout title="Créer votre compte">
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
                            Création de votre compte
                        </div>
                        <form action=""
                              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                              onSubmit={e => {
                                  console.log('isValid', isValid)
                                  isValid
                                  ? formik.handleSubmit(e)
                                  : alert ('handle ')
                              }}>
                            <div className="flex border rounded-xl relative">
                                <input type="text"
                                       placeholder="Nom d'utilisateur"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                                       {...formik.getFieldProps('username')}

                                />
                                <span className="icon flex items-center px-4">
                                    <HiOutlineUser size={25} />
                                </span>
                            </div>
                            {formik.errors.username && formik.touched.username ?<span className='text-rose-500'>{formik.errors.username}</span>:<></>}
                            <div className="my-3 flex border rounded-xl relative">
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
                            <div className="my-3 flex border rounded-xl relative">
                                <input type={`${show.password ? "text": "password"}`}
                                       placeholder="Mot de Passe"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                                       {...formik.getFieldProps('password')}

                                />
                                <span className="icon flex items-center px-4" onClick={() => setShow({...show,password:!show.password})}>
                                    <HiFingerPrint size={25} />
                                </span>
                            </div>
                            {formik.errors.password && formik.touched.password ?<span className='text-rose-500'>{formik.errors.password}</span>:<></>}
                            <div className="my-3 flex border rounded-xl relative">
                                <input type={`${show.cpassword ? "text": "password"}`}
                                       placeholder="Confirmer le mot de passe"
                                       className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                                       {...formik.getFieldProps('cpassword')}

                                />
                                <span className="icon flex items-center px-4" onClick={() => setShow({...show,cpassword:!show.cpassword})}>
                                    <HiFingerPrint size={25} />
                                </span>
                            </div>
                            {formik.errors.cpassword && formik.touched.cpassword ?<span className='text-rose-500'>{formik.errors.cpassword}</span>:<></>}
                            <div className="px-4 pb-2 pt-4">
                                <button
                                    type="submit"
                                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                                >
                                    Inscrivez-vous
                                </button>
                            </div>
                            <div className="text-right text-gray-400">
                                Vous avez déjà un compte ?
                                <div className="hover:underline hover:text-gray-100">
                                    <Link href="login">Connectez vous</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>)
}


