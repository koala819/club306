import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { deleteCar, sendMailRemoveCarCPanel } from '@/lib/supabase';
import ClipLoader from 'react-spinners/ClipLoader';

export default function DeleteCar({
  memberId,
  car,
}: {
  memberId: number;
  car: {
    color: { name: string | null; hexa: string | null };
    finition: string;
    immatriculation: string;
    min: string;
    model: string;
  };
}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);

  const schema = yup.object().shape({
    selectedOption: yup.string().required('Faites un choix svp'),
    reason: yup.string().test({
      name: 'reason',
      test: function (value: string | undefined) {
        const selectedOption = this.resolve(yup.ref('selectedOption'));
        if (selectedOption === 'autre') {
          return (
            !!value ||
            this.createError({
              path: 'reason',
              message: 'Veuillez indiquer la raison',
            })
          );
        }
        return true;
      },
    }),
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setShowReasonInput(value === 'autre');
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
    setShowReasonInput(false);
  };

  const handleDeleteCar = async (data: any) => {
    let reason = selectedOption;
    setDisplayLoader(true);
    try {
      if (selectedOption === 'autre') {
        reason = data.reason;
      }
      //
      const response = await deleteCar(car, memberId, reason);
      if (response !== undefined && response.status === 404) {
        reset();
        setSelectedOption('');
        setIsOpen(false);
        setShowReasonInput(false);
        alert(
          "Il y a un soucis avec l'immatriculation du véhicule, merci de contacter un membre du staff svp !"
        );
      }
      if (response !== undefined && response.status === 200) {
        const response = await sendMailRemoveCarCPanel(car, memberId, reason);
        if (response !== undefined && response.status === 200) {
          alert('Suppression de votre 306 avec succès.');
          reset();
          window.location.reload();
          setSelectedOption('');
          setIsOpen(false);
          setShowReasonInput(false);
        }
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div>
      {displayLoader && (
        <section className="fixed grid h-screen w-screen place-items-center bg-white top-0 left-0 z-[1000]">
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </section>
      )}
      {!displayLoader && (
        <button
          onClick={handleOpen}
          className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
        >
          Supprimer
        </button>
      )}
      {isOpen && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
            <div className="bg-red-300 w-1/3 p-8 rounded-lg shadow-lg border-2 border-red-600">
              <h2 className="text-2xl font-bold mb-4">
                Pourquoi voulez-vous supprimer cette 306 ?
              </h2>
              <form onSubmit={handleSubmit(handleDeleteCar)}>
                <div className="mb-4">
                  <div>
                    <label className="block mb-2">
                      <Controller
                        name="selectedOption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            type="radio"
                            value="vendu"
                            checked={field.value === 'vendu'}
                            onChange={() => {
                              field.onChange('vendu');
                              handleOptionChange('vendu');
                            }}
                          />
                        )}
                      />
                      J'ai vendu ce véhicule
                    </label>
                    <label className="block mb-2">
                      <Controller
                        name="selectedOption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            type="radio"
                            value="casse"
                            checked={field.value === 'casse'}
                            onChange={() => {
                              field.onChange('casse');
                              handleOptionChange('casse');
                            }}
                          />
                        )}
                      />
                      J'ai cassé ce véhicule
                    </label>
                    <label
                      className={`block mb-2 ${
                        selectedOption === 'autre' ? 'text-black' : ''
                      }`}
                    >
                      <Controller
                        name="selectedOption"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            type="radio"
                            value="autre"
                            checked={field.value === 'autre'}
                            onChange={() => {
                              field.onChange('autre');
                              handleOptionChange('autre');
                            }}
                          />
                        )}
                      />
                      Autre
                    </label>
                  </div>

                  {errors.selectedOption && (
                    <div className="text-red-500 font-mono text-sm">
                      {errors.selectedOption.message}
                    </div>
                  )}

                  {showReasonInput && (
                    <div className="mb-4">
                      <label className="block mb-2">Raison :</label>
                      <input
                        type="text"
                        {...register('reason')}
                        className={`w-full border border-gray-300 rounded-md p-2`}
                        placeholder="Saisissez la raison"
                      />
                      {errors.reason && (
                        <div className="text-red-500 font-mono text-sm">
                          {errors.reason.message}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                  >
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
