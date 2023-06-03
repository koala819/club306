import React, { useState } from 'react';
import { FcApproval, FcCancel } from 'react-icons/fc';

export const Box = ({
  setDisplayBox,
  modifyValue,
}: {
  setDisplayBox: React.Dispatch<React.SetStateAction<boolean>>;
  modifyValue: string;
}) => {
  const [inputValue, setInputValue] = useState(modifyValue);

  const handleClick = () => {
    setDisplayBox(false);
  };
  const handleCancelClick = () => {
    setDisplayBox(false);
  };

  const handleSaveClick = () => {
    alert('fonction prochainement opérationnelle');
    setDisplayBox(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='modal fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='modal-content bg-white border border-gray-300 rounded shadow-lg p-2'>
        <span
          className=' flex justify-end text-gray-600 text-lg cursor-pointer -mt-2'
          onClick={handleClick}
        >
          &times;
        </span>
        <div className='flex items-center justify-center'>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='border border-gray-300 rounded mr-2'
          />
          <button
            className='hover:bg-slate-400 py-1 px-2'
            onClick={handleSaveClick}
          >
            <FcApproval size={33} />
          </button>
          <button
            className='hover:bg-slate-400 py-1 px-2 rounded'
            onClick={handleCancelClick}
          >
            <FcCancel size={33} />
          </button>
        </div>
      </div>
    </div>
  );
};
