import React, { useEffect, useRef, useState } from 'react';
import { FcApproval, FcCancel } from 'react-icons/fc';
import {
  getAllColors,
  getAllFinitions,
  getAllModels,
  updateCarColor,
  updateCarFinition,
  updateCarImmatriculation,
  updateCarMin,
  updateCarModel,
} from '@/lib/supabase';
import { Color, Finition, Model } from '@/types/models';

export const Box = ({
  setDisplayBox,
  modifyValue,
  editingIndex,
  immatriculation,
  handleMinUpdate,
  handleImmatriculationUpdate,
  handleModelUpdate,
  handleFinitionUpdate,
  handleColorUpdate,
}: {
  setDisplayBox: React.Dispatch<React.SetStateAction<boolean>>;
  modifyValue: string;
  editingIndex: number;
  immatriculation: string;
  handleMinUpdate: (value: string) => void;
  handleImmatriculationUpdate: (value: string) => void;
  handleModelUpdate: (value: string) => void;
  handleFinitionUpdate: (value: string) => void;
  handleColorUpdate: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState(modifyValue);
  const [colors, setColors] = useState<Color[]>([]);
  const [finitions, setFinitions] = useState<Finition[]>([]);
  const [models, setModels] = useState<Model[]>([]);

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

  const handleSaveClick = (value: string) => {
    switch (editingIndex) {
      case 0:
        updateCarMin(value, immatriculation).then((response) => {
          if (response.status === 200) {
            alert('Modification effectuée avec succès :)');
            handleMinUpdate(value);
            return;
          }
          alert('Une erreur est survenue');
        });
        break;
      case 1:
        updateCarImmatriculation(value, immatriculation).then((response) => {
          if (response.status === 200) {
            alert('Modification effectuée avec succès :)');
            handleImmatriculationUpdate(value);
            return;
          }
          alert('Une erreur est survenue');
        });
        break;
      case 2:
        updateCarModel(newModel.current?.value, immatriculation).then(
          (response) => {
            if (response.status === 200) {
              alert('Modification effectuée avec succès :)');
              const newValue = response.headers.get('value');
              let newModelUpdate = null;

              if (newValue) {
                const value = parseInt(newValue, 10);
                const model = models.find((m) => m.id === value);

                if (model) {
                  newModelUpdate = model.name;
                }
              }
              handleModelUpdate(newModelUpdate || '');
              return;
            }
            alert('Une erreur est survenue');
          }
        );
        break;
      case 3:
        updateCarFinition(newFinition.current?.value, immatriculation).then(
          (response) => {
            if (response.status === 200) {
              alert('Modification effectuée avec succès :)');
              const newValue = response.headers.get('value');
              let newFinitionUpdate = null;

              if (newValue) {
                const value = parseInt(newValue, 10);
                const finition = finitions.find((m) => m.id === value);

                if (finition) {
                  newFinitionUpdate = finition.name;
                }
              }
              handleFinitionUpdate(newFinitionUpdate || '');
              return;
            }
            alert('Une erreur est survenue');
          }
        );
        break;
      case 4:
        updateCarColor(newColorName.current?.value, immatriculation).then(
          (response) => {
            if (response.status === 200) {
              alert('Modification effectuée avec succès :)');
              const newValue = response.headers.get('value');
              let newColorUpdate = null;

              if (newValue) {
                const value = parseInt(newValue, 10);
                const color = colors.find((m) => m.id === value);

                if (color) {
                  newColorUpdate = color.name;
                }
              }
              handleColorUpdate(newColorUpdate || '');
              return;
            }
            alert('Une erreur est survenue');
          }
        );
        break;
    }
    // alert('fonction prochainement opérationnelle');
    setDisplayBox(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
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
              className="border border-gray-300 rounded mr-2 dark:bg-gray-700"
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
  );
};
