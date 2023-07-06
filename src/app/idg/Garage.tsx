import { useState } from 'react';
import { Box } from './Box';
import { HiPencil } from 'react-icons/hi';
import { getHexaCarColor, sendMailUpdateCarInIdg } from '@/lib/supabase';

export const Garage = ({
  carColor,
  immatriculation,
  model,
  finition,
  colorName,
  min,
  carsNumber,
  displayCar,
}: {
  carColor: string | null | undefined;
  immatriculation: string | null | undefined;
  model: string | null | undefined;
  finition: string | null | undefined;
  colorName: string | null | undefined;
  min: string | null | undefined;
  carsNumber: number | null | undefined;
  displayCar: any | null | undefined;
}) => {
  const [viewCar, setViewCar] = useState(0);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editing, setEditing] = useState(false);
  const [displayBox, setDisplayBox] = useState(false);
  const [modifyValue, setModifyValue] = useState('');
  const [updatedMin, setUpdatedMin] = useState(min);
  const [updatedImmat, setUpdatedImmat] = useState(immatriculation);
  const [updatedModel, setUpdatedModel] = useState(model);
  const [updatedFinition, setUpdatedFinition] = useState(finition);
  const [updatedColorName, setUpdatedColorName] = useState(colorName);
  const [updatedColorHexa, setUpdatedColorHexa] = useState(carColor);

  const handleEditClick = (value: string | undefined | null) => {
    setDisplayBox(true);
    value !== undefined && value !== null && setModifyValue(() => value);
  };

  const handleMobileBoxClick = (value: string | undefined | null) => {
    if (window.innerWidth <= 810) {
      setDisplayBox(true);
      value !== undefined && value !== null && setModifyValue(() => value);
    }
  };

  const handleMinUpdate = (updatedValue: string) => {
    sendMailUpdateCarInIdg(
      updatedMin,
      updatedValue,
      updatedImmat,
      'Le Type Mine'
    );
    setUpdatedMin(() => updatedValue);
  };

  const handleImmatriculationUpdate = (updatedValue: string) => {
    sendMailUpdateCarInIdg(
      updatedImmat,
      updatedValue,
      updatedValue,
      "L'Immatriculation"
    );
    setUpdatedImmat(() => updatedValue);
  };

  const handleModelUpdate = (updatedValue: string) => {
    sendMailUpdateCarInIdg(
      updatedModel,
      updatedValue,
      updatedImmat,
      'Le Modèle'
    );
    setUpdatedModel(() => updatedValue);
  };

  const handleFinitionUpdate = (updatedValue: string) => {
    sendMailUpdateCarInIdg(
      updatedFinition,
      updatedValue,
      updatedImmat,
      'La Finition'
    );
    setUpdatedFinition(() => updatedValue);
  };

  const handleColorUpdate = async (updatedValue: string) => {
    sendMailUpdateCarInIdg(
      updatedColorName,
      updatedValue,
      updatedImmat,
      'La Couleur'
    );
    setUpdatedColorName(() => updatedValue);
    console.log('updatedValue', updatedValue);
    const newHexa = await getHexaCarColor(updatedValue);
    newHexa !== null && setUpdatedColorHexa(() => newHexa[0].hexa);
  };

  return (
    <div
      className=" flex justify-center items-center"
      style={{
        height: window.innerWidth <= 768 ? '64vh' : '50vh',
      }}
    >
      {displayBox && (
        <Box
          setDisplayBox={setDisplayBox}
          modifyValue={modifyValue}
          editingIndex={editingIndex}
          immatriculation={updatedImmat || ''}
          handleMinUpdate={handleMinUpdate}
          handleImmatriculationUpdate={handleImmatriculationUpdate}
          handleModelUpdate={handleModelUpdate}
          handleFinitionUpdate={handleFinitionUpdate}
          handleColorUpdate={handleColorUpdate}
        />
      )}
      <div className=" text-gray-800 dark:text-white overflow-hidden border-4 rounded-2xl shadow-lg w-11/12">
        <div className="flex ">
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-11/12 bg-gradient-to-br from-slate-100 to-gray-300 pt-12 pb-12 px-4 text-white rounded-2xl">
              <svg
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 58 23.57"
              >
                <defs>
                  <style>{`.cls-1{fill:#${updatedColorHexa};fill-rule:evenodd`}</style>
                </defs>
                <path
                  className="cls-1"
                  d="M46.16,31.12a5.33,5.33,0,1,1-5.33,5.33,5.33,5.33,0,0,1,5.33-5.33ZM3.38,38.23h.8a6.13,6.13,0,0,1-.26-1.78,6.31,6.31,0,0,1,10.89-4.34H33.93a.25.25,0,0,1,0,.49H15.23a6.32,6.32,0,0,1,1.31,3.85,6.13,6.13,0,0,1-.26,1.78H40.1a6.3,6.3,0,0,1-.2-1H20.25A.25.25,0,0,1,20,37a.25.25,0,0,1,.25-.25h19.6v-.31a6.31,6.31,0,1,1,12.62,0,6.13,6.13,0,0,1-.26,1.78H55c4,0,4,0,4-4.72a8.92,8.92,0,0,0,0-.91H55.43a.25.25,0,1,1,0-.49h3.44c-1.11-6-9.55-5.93-14.18-7-3.23-.76-8-6.86-18.61-6.86H8.89c-1.47,0-5.61,5.78-5.61,7.6,0,4.44-2.28,3-2.28,5.61v.68H3.15a.25.25,0,0,1,0,.49H1c0,5.12.15,5.63,2.37,5.63ZM27.71,25.82V19.73c-.54,0-1.07-.05-1.63-.05H17.36v6.14Zm.49-6.05v6.05H42.63c-.53-.28-1-.6-1.51-.9-1.22-.78-2.41-1.57-3.69-2.28a22.5,22.5,0,0,0-9.23-2.87ZM16.87,25.82V19.68h-3.1a12.91,12.91,0,0,0-2.51,2.77,12.18,12.18,0,0,0-1.79,3.37Zm-6.64,5.3A5.33,5.33,0,1,1,4.9,36.45a5.33,5.33,0,0,1,5.33-5.33Zm0,2.44a2.89,2.89,0,1,1-2.89,2.89,2.89,2.89,0,0,1,2.89-2.89Zm35.93,0a2.89,2.89,0,1,1-2.89,2.89,2.9,2.9,0,0,1,2.89-2.89Z"
                  transform="translate(-1 -18.22)"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center h-full mt-4">
            <div className="w-11/12">
              <ul>
                <li
                  className="mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                  onClick={() => handleMobileBoxClick(updatedMin)}
                >
                  <div className="flex items-center">
                    <div className="w-full flex flex-col md:flex-row">
                      <span className="w-1/3">Type Mine</span>
                      <div
                        className="flex justify-center w-full relative"
                        onMouseEnter={() => {
                          setEditing(true);
                          setEditingIndex(0);
                        }}
                        onMouseLeave={() => setEditing(false)}
                      >
                        <span className="text-green-500">{updatedMin}</span>
                        {editing && editingIndex === 0 && (
                          <button
                            className="absolute right-0 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                            onClick={() => handleEditClick(updatedMin)}
                          >
                            <HiPencil />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                  onClick={() => handleMobileBoxClick(updatedImmat)}
                >
                  <div className="flex items-center">
                    <div className="w-full flex flex-col md:flex-row">
                      <span className="w-1/3">Immatriculation</span>
                      <div
                        className="flex justify-center w-full relative"
                        onMouseEnter={() => {
                          setEditing(true);
                          setEditingIndex(1);
                        }}
                        onMouseLeave={() => setEditing(false)}
                      >
                        <span className="text-green-500 uppercase">
                          {updatedImmat}
                        </span>
                        {editing && editingIndex === 1 && (
                          <button
                            className="absolute right-0 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                            onClick={() => handleEditClick(updatedImmat)}
                          >
                            <HiPencil />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                  onClick={() => handleMobileBoxClick(updatedModel)}
                >
                  <div className="flex items-center">
                    <div className="w-full flex flex-col md:flex-row">
                      <span className="w-1/3">Modèle</span>
                      <div
                        className="flex justify-center w-full relative"
                        onMouseEnter={() => {
                          setEditing(true);
                          setEditingIndex(2);
                        }}
                        onMouseLeave={() => setEditing(false)}
                      >
                        <span className="text-green-500">{updatedModel}</span>
                        {editing && editingIndex === 2 && (
                          <button
                            className="absolute right-0 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                            onClick={() => handleEditClick(updatedModel)}
                          >
                            <HiPencil />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                  onClick={() => handleMobileBoxClick(updatedFinition)}
                >
                  <div className="flex items-center">
                    <div className="w-full flex flex-col md:flex-row">
                      <span className="w-1/3">Finition</span>
                      <div
                        className="flex justify-center w-full relative"
                        onMouseEnter={() => {
                          setEditing(true);
                          setEditingIndex(3);
                        }}
                        onMouseLeave={() => setEditing(false)}
                      >
                        <span className="text-green-500">
                          {updatedFinition}
                        </span>
                        {editing && editingIndex === 3 && (
                          <button
                            className="absolute right-0 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                            onClick={() => handleEditClick(updatedFinition)}
                          >
                            <HiPencil />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="mb-2 bg-white dark:bg-gray-800 p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                  onClick={() => handleMobileBoxClick(updatedColorName)}
                >
                  <div className="flex items-center">
                    <div className="w-full flex flex-col md:flex-row">
                      <span className="w-1/3">Couleur</span>
                      <div
                        className="flex justify-center w-full relative"
                        onMouseEnter={() => {
                          setEditing(true);
                          setEditingIndex(4);
                        }}
                        onMouseLeave={() => setEditing(false)}
                      >
                        <span className="text-green-500">
                          {updatedColorName}
                        </span>
                        {editing && editingIndex === 4 && (
                          <button
                            className="absolute right-0 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                            onClick={() => handleEditClick(updatedColorName)}
                          >
                            <HiPencil />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="px-5 pb-2">
            <div className="flex">
              {carsNumber !== undefined &&
                carsNumber !== null &&
                carsNumber > 0 &&
                Array.from(Array(carsNumber).keys()).map((car, index) => (
                  <div className="flex-1 group " key={index}>
                    <div
                      className={`flex items-end justify-center text-center mx-auto px-4 w-full  group-hover:text-red-500 border-b-2 ${
                        viewCar === index
                          ? 'text-blue-500 cursor-default group-hover:text-blue-500 border-b-blue-600'
                          : 'text-gray-400 border-transparent cursor-pointer group-hover:border-pink-500'
                      }`}
                      onClick={() => {
                        displayCar(+index);
                        setViewCar(index);
                      }}
                    >
                      <span className="block px-1">
                        <i className="far fa-home text-xl pt-1 mb-1 block"></i>
                        <span className="block text-xs pb-1">
                          Voiture {index + 1}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
