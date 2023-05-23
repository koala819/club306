import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Link from 'next/link';
import { rst_pwd } from '../lib/validate';
import { checkMail } from '../lib/supabase';
import Layout from '../components/Layout';

export default function OtpInput() {
  const [confirmationSend, setConfirmationSend] = useState<boolean>(false);
  const [disable, setDisable] = useState(true);
  const [timerCount, setTimer] = useState(60);
  const [wrongMail, setWrongMail] = useState('');
  const [otp, setOTP] = useState(Math.floor(Math.random() * 9000 + 1000));
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: rst_pwd,
    onSubmit,
  });

  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs && inputRefs.current && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOTP(Math.floor(Math.random() * 9000 + 1000));
    }, 300000); // 300000 ms = 5 minutes

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <Layout title="Reset pwd" displayNavbar={false}>
      <div className="flex center">
        {!confirmationSend ? (
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 block"
                >
                  Email :
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="jack.scelere@club306.fr"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={` w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    formik.errors.email &&
                    formik.touched.email &&
                    'border-red-600'
                  }`}
                />
                <span className="text-red-600 text-xs">
                  {formik.errors.email || wrongMail}
                </span>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Changer le mot de passe
                </button>
                &nbsp;
                <Link
                  href="/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Annuler
                </Link>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>Verification de votre email</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>
                    Si l&apos;adresse email saisie est connue dans notre base,
                    vous avez reçu un mail avec un code
                  </p>
                </div>
              </div>

              <div>
                <form>
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                      {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="w-16 h-16">
                          <input
                            ref={(ref) => {
                              inputRefs.current[index] =
                                ref as HTMLInputElement;
                            }}
                            maxLength={1}
                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            type="text"
                            onChange={(e) => handleInputChange(e, index)}
                          ></input>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col space-y-5">
                      <div>
                        <a
                          onClick={() => verfiyOTP()}
                          className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                        >
                          Continuer pour changer mon mot de passe
                        </a>
                      </div>

                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Vous n&apos;avez pas reçu le code ?</p>{' '}
                        <a
                          className="flex flex-row items-center"
                          style={{
                            color: disable ? 'gray' : 'blue',
                            cursor: disable ? 'none' : 'pointer',
                            textDecorationLine: disable ? 'none' : 'underline',
                          }}
                          onClick={() => resendOTP(formik.values.email)}
                        >
                          {disable
                            ? `Renvoyer le code dans ${timerCount}s`
                            : 'Renvoyer le code'}
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const { value } = e.target;
    setOTPinput((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = parseInt(value);
      return updatedValues;
    });

    if (value.length >= 1 && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  }

  async function sendMail(email: string, otp: number) {
    const data = {
      mail: email,
      otp: otp,
      from: 'rstPwd',
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    try {
      fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
        async (response) => {
          if (response.status === 200) {
            console.log('Send mail with SUCCESS :)');
            return true;
          } else {
            console.log('Email send with ERROR !!!');
            throw new Error('Failed to send mail');
          }
        }
      );
    } catch (error) {
      console.log('ERROR to send the mail\n', error);
      return false;
    }
  }

  async function onSubmit(values: any) {
    // console.log('otp', otp);
    const overTry = executeLimitedTimes();
    if (overTry === true) {
      setWrongMail("Trop d'essais ... Ban IP de 24h !!!");
    } else {
      const emailExist = await checkMail(values.email);

      if (emailExist === false) {
        setConfirmationSend(false);
        setWrongMail('Veuillez saisir votre email');
      } else {
        await sendMail(values.email, otp).then(() => {
          setConfirmationSend(true);
        });
      }
    }
  }

  async function resendOTP(email: string) {
    // console.log('resend OTP', email);
    // const response = await checkMail(email);

    // if (response.data && response.data.length > 0) {
    const success = await sendMail(email, otp);
    if (success) {
      setConfirmationSend(true);
    }
    // }
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join('')) === otp) {
      // Enregistrement de l'e-mail dans le stockage local
      localStorage.setItem('email', formik.values.email);
      router.push('/recoverPwd');
      return null;
    }
    alert(
      'Le code saisi est incorrect !!!\nEssayez encore ou cliquez sur le lien pour vous faire renvoyer un nouveau code.'
    );
    return;
  }

  function executeLimitedTimes() {
    const MAX_EXECUTIONS = 5;
    const MAX_EXECUTIONS_KEY = 'max_executions';
    const LAST_EXECUTION_KEY = 'last_execution';

    // localStorage.setItem(MAX_EXECUTIONS_KEY, JSON.stringify(0));

    let executions = parseInt(localStorage.getItem(MAX_EXECUTIONS_KEY) || '0');

    if (executions >= MAX_EXECUTIONS) {
      const lastExecutionTimestamp = localStorage.getItem(LAST_EXECUTION_KEY);

      if (lastExecutionTimestamp) {
        const lastExecutionDate = new Date(lastExecutionTimestamp);
        const currentDate = new Date();

        const hoursPassed =
          Math.abs(currentDate.getTime() - lastExecutionDate.getTime()) / 36e5;
        const blockDurationHours = 24;

        if (hoursPassed < blockDurationHours) {
          console.log('The IP is blocked. Please try again after 24 hours.');
          return true;
        }
      }
    }

    console.log('The action is executed.');

    executions++;
    localStorage.setItem(MAX_EXECUTIONS_KEY, executions.toString());

    const currentTimestamp = new Date().toString();
    localStorage.setItem(LAST_EXECUTION_KEY, currentTimestamp);
  }
}
