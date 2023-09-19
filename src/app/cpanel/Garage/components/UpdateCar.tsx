import React, { useEffect, useRef, useState } from 'react';
import { FcApproval, FcCancel } from 'react-icons/fc';
import {
  getAllColors,
  getAllFinitions,
  getAllModels,
  sendMailUpdatePartCar,
  updateCarColor,
  updateCarFinition,
  updateCarImmatriculation,
  updateCarMin,
  updateCarModel,
} from '@/lib/supabase';
import { Color, Finition, Model } from '@/types/models';
import ClipLoader from 'react-spinners/ClipLoader';

export default function UpdateCar({
  setDisplayBox,
  modifyValue,
  editingIndex,
  immatriculation,
}: {
  setDisplayBox: React.Dispatch<React.SetStateAction<boolean>>;
  modifyValue: string;
  editingIndex: number;
  immatriculation: string;
}) {
  const [inputValue, setInputValue] = useState(modifyValue);
  const [colors, setColors] = useState<Color[]>([]);
  const [finitions, setFinitions] = useState<Finition[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [displayLoader, setDisplayLoader] = useState(false);

  const newModel = useRef<HTMLSelectElement>(null);
  const newFinition = useRef<HTMLSelectElement>(null);
  const newColorName = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const carColor = await getAllColors();
      if (carColor !== null && carColor.data !== null) {
        const fetchedColors: Color[] = carColor.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
            hexa: color.hexa,
          };
        });
        setColors(fetchedColors);
      }

      const carFinition = await getAllFinitions();
      if (carFinition !== null && carFinition.data !== null) {
        const fetchedFinitions: Finition[] = carFinition.data.map(
          (color: any) => {
            return {
              id: color.id,
              name: color.name,
            };
          }
        );
        setFinitions(fetchedFinitions);
      }

      const carModel = await getAllModels();
      if (carModel !== null && carModel.data !== null) {
        const fetchedModels: Model[] = carModel.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
          };
        });
        setModels(fetchedModels);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setDisplayBox(false);
  };

  const handleCancelClick = () => {
    setDisplayBox(false);
  };

  const handleSaveClick = async (value: string) => {
    setDisplayLoader(true);
    try {
      switch (editingIndex) {
        case 0:
          updateCarMin(value, immatriculation).then(async (response) => {
            if (response.status === 200) {
              const response = await sendMailUpdatePartCar(
                immatriculation,
                value,
                modifyValue,
                'mine'
              );
              if (response !== undefined && response.status === 200) {
                alert('Mise à jour du type MINE effectuée avec succès :)');
                window.location.reload();
                return;
              }
            }
            alert('Une erreur est survenue');
          });
          break;
        case 1:
          updateCarImmatriculation(value, immatriculation).then(
            async (response) => {
              if (response.status === 200) {
                const response = await sendMailUpdatePartCar(
                  value,
                  value,
                  modifyValue,
                  'immatriculation'
                );

                if (response !== undefined && response.status === 200) {
                  alert(
                    "Mise à jour de l'immatriculation effectuée avec succès :)"
                  );
                  window.location.reload();
                  // handleImmatriculationUpdate(value);
                  return;
                }
              }
              alert('Une erreur est survenue');
            }
          );
          break;
        case 2:
          const newValueModel = newModel.current?.value;
          const responseUpdateModel = await updateCarModel(
            newModel.current?.value,
            immatriculation
          );
          if (responseUpdateModel.status === 200) {
            if (newValueModel) {
              const value = parseInt(newValueModel, 10);
              const model = models.find((m) => m.id === value);

              if (model) {
                const response = await sendMailUpdatePartCar(
                  immatriculation,
                  model.name,
                  modifyValue,
                  'model'
                );
                if (response !== undefined && response.status === 200) {
                  alert('Mise à jour du modèle effectuée avec succès :)');
                  window.location.reload();
                  return;
                }
              }
            }
          }
          alert('Une erreur est survenue pour mettre à jour le modèle');
          break;
        case 3:
          const newValueFinition = newFinition.current?.value;
          const responseUpdateFinition = await updateCarFinition(
            newFinition.current?.value,
            immatriculation
          );
          if (responseUpdateFinition.status === 200) {
            if (newValueFinition) {
              const value = parseInt(newValueFinition, 10);
              const finition = finitions.find((m) => m.id === value);

              if (finition) {
                const response = await sendMailUpdatePartCar(
                  immatriculation,
                  finition.name,
                  modifyValue,
                  'finition'
                );

                if (response !== undefined && response.status === 200) {
                  alert('Mise à jour de la finition effectuée avec succès :)');
                  window.location.reload();
                  return;
                }
              }
            }
          }
          alert('Une erreur est survenue pour mettre à jour la finition');
          break;
        case 4:
          const newValueColor = newColorName.current?.value;

          const responseUpdateColor = await updateCarColor(
            newColorName.current?.value,
            immatriculation
          );
          if (responseUpdateColor.status === 200) {
            if (newValueColor) {
              const value = parseInt(newValueColor, 10);
              const color = colors.find((m) => m.id === value);

              if (color) {
                const response = await sendMailUpdatePartCar(
                  immatriculation,
                  color.name,
                  modifyValue,
                  'couleur'
                );
                if (response !== undefined && response.status === 200) {
                  alert('Mise à jour de la couleur effectuée avec succès :)');
                  window.location.reload();
                  return;
                }
              }
            }
          }
          alert('Une erreur est survenue pour mettre à jour la couleur');

          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
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
        <div className="modal fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-content bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg p-2">
            <span
              className=" flex justify-end text-gray-600 dark:text-white text-lg cursor-pointer -mt-2"
              onClick={handleClick}
            >
              &times;
            </span>
            <div className="flex items-center justify-center">
              {(editingIndex === 0 || editingIndex === 1) && (
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded mr-2 dark:bg-gray-700 uppercase"
                />
              )}
              {editingIndex === 2 && (
                <select ref={newModel}>
                  {models
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((model: Model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                </select>
              )}
              {editingIndex === 3 && (
                <select ref={newFinition}>
                  {finitions
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((finition: Finition) => (
                      <option key={finition.id} value={finition.id}>
                        {finition.name}
                      </option>
                    ))}
                </select>
              )}
              {editingIndex === 4 && (
                <select ref={newColorName}>
                  {colors
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((color: Color) => (
                      <option key={color.id} value={color.id}>
                        {color.name}
                      </option>
                    ))}
                </select>
              )}
              <button
                className="hover:bg-slate-400 py-1 px-2"
                onClick={() => handleSaveClick(inputValue)}
              >
                <FcApproval size={33} />
              </button>
              <button
                className="hover:bg-slate-400 py-1 px-2 rounded"
                onClick={handleCancelClick}
              >
                <FcCancel size={33} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
