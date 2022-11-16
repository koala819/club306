import {Layout} from '../components/Layout'
import {useFormik} from "formik";
import {membership_validate} from "../lib/validate";

export default function Membership() {


    const formik = useFormik({
        initialValues: {
            discoverClub306: '',
            first_name: '',
            last_name: '',
            cpassword: ''
        },
        onSubmit,
        validate: membership_validate
    })

    async function onSubmit(values: any) {
        console.log('hello', values)
    }

    return (
        <Layout title="Adhesion Membre">
            <section className="min-h-screen flex items-stretch text-black ">
                <div className="w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
                    <div className="w-full py-6 z-20">
                        <h1>Adhesion Membre</h1>
                        <form action=""
                              onSubmit={formik.handleSubmit}
                        >
                            <div className="grid md:grid-cols-2 md:gap-6 mt-8">
                                <label htmlFor="discoverClub306"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Comment avez-vous connu le Club 306 ?
                                </label>
                                <select id="discoverClub306"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Relation</option>
                                    <option>Internet</option>
                                    <option>Facebook</option>
                                    <option>Autre</option>
                                </select>
                                {/*First Name*/}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           id="first_name"
                                           className={`${"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent " +
                                           "border-0 border-b-2 border-gray-300 appearance-none dark:text-white " +
                                           "dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 " +
                                           "focus:border-blue-600 peer"} ${formik.errors.first_name && formik.touched.first_name ? 'border-red-600' : ''}`}
                                           {...formik.getFieldProps('first_name')}
                                    />
                                    <label htmlFor="first_name"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Nom
                                    </label>
                                </div>
                                {/*Last Name*/}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           id="last_name"
                                           className={`${"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent " +
                                           "border-0 border-b-2 border-gray-300 appearance-none dark:text-white " +
                                           "dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 " +
                                           "focus:border-blue-600 peer"} ${formik.errors.last_name && formik.touched.last_name ? 'border-red-600' : ''}`}
                                           {...formik.getFieldProps('last_name')}
                                    />
                                    <label htmlFor="last_name"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Prénom
                                    </label>
                                </div>
                                {/*Address*/}
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="address"
                                           id="address"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="address"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Adresse
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_mail"
                                           id="floating_CP"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_CP"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Code Postal
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_town"
                                           id="floating_town"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_town"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Ville
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_mail"
                                           id="floating_mail"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_mail"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        E-mail
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_tel"
                                           id="floating_tel"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_tel"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Numéro de téléphone
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_birthday"
                                           id="floating_birthday"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_birthday"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Date de Naissance
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input type="text"
                                           name="floating_immatriculation"
                                           id="floating_immatriculation"
                                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                           placeholder=" " required/>
                                    <label htmlFor="floating_immatriculation"
                                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Immatriculation de votre 306
                                    </label>
                                </div>
                            </div>


                            <div className="grid md:grid-cols-2 md:gap-6">

                            </div>


                            <div className="grid md:grid-cols-2 md:gap-6">
                                <label htmlFor="color"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Quelle est la couleur de votre 306 ?
                                </label>
                                <select id="color"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Blanc</option>
                                    <option>Bleu</option>
                                    <option>Gris</option>
                                    <option>Jaune</option>
                                    <option>Noir</option>
                                    <option>Prune</option>
                                    <option>Rouge</option>
                                    <option>Vert</option>
                                </select>
                                <label htmlFor="model"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Quelle est le modèle de votre 306 ?
                                </label>
                                <select id="model"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>3 Portes</option>
                                    <option>5 Portes</option>
                                    <option>Break</option>
                                    <option>Cabriolet</option>
                                </select>
                                <label htmlFor="registrationDocument"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Est-ce que la carte grise est à votre nom  ?
                                </label>
                                <select id="registrationDocument"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Oui</option>
                                    <option>Non</option>
                                </select>
                            </div>

                            <fieldset>
                                <legend className="sr-only">Checkbox variants</legend>

                                <div className="flex items-center mb-4">
                                    <input checked id="checkbox-1" type="checkbox" value=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                        <label htmlFor="checkbox-1"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                                        >
                                            Cotisation
                                            <p id="helper-checkbox-text"
                                               className="text-xs font-normal text-gray-500 dark:text-gray-400"
                                            >
                                                Je comprends que la cotisation annuelle au Club306 est fixée à 20 euros pour une année pleine en adhésion (01/01 au 31/12).
                                            </p>
                                        </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="checkbox-2" type="checkbox" value=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                        <label htmlFor="checkbox-2"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                                        >
                                            J’atteste sur l’honneur que je suis bien le (la) propriétaire de chaque véhicule déclaré, que les caractéristiques communiquées sont conformes à la réalité et que le véhicule est à jour de son assurance et du contrôle technique.
                                        </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="checkbox-3" type="checkbox" value=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                        <label htmlFor="checkbox-3"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Je transmets, au minimum, 1 photos (numérique ou sur papier) de mon véhicule via mon adresse mail ou dans mon dossier d&apos;adhésion.
                                        </label>
                                </div>

                                <div className="flex mb-4">
                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text"
                                               type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                    </div>
                                    <div className="ml-2 text-sm">
                                        <label htmlFor="helper-checkbox"
                                               className="font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Je m&apos;engage, en adhérant au Club à respecter les termes de ses statuts et de son règlement.
                                        </label>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input id="international-shipping-disabled" type="checkbox" value=""
                                           className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                           disabled
                                    />
                                        <label htmlFor="international-shipping-disabled"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                                        >
                                            En soumettant ce formulaire, je confirme avoir pris connaissant de <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">la politique de confidentialite</a> du Club306.
                                            Des lors, j&apos;autorise Club306 à exploiter les informations saisies dans le cadre de la relation commerciale qui peut en découler.
                                        </label>
                                </div>
                            </fieldset>


                            <button type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </Layout>)
}


