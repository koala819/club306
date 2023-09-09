'use client';
import RootLayout from '@/app/layout';
import CustomLayout from '../../layout';
import Calendar from './components/Calendar';
import ThemeCalendar from './components/ThemeCalendar';
import { useState } from 'react';

export default function Event() {
  const [displayCalendar, setDisplayCalendar] = useState(true);
  const [isCalendarSelected, setIsCalendarSelected] = useState(true);

  const handleCalendarClick = () => {
    setIsCalendarSelected(true);
    setDisplayCalendar(true);
  };

  const handleThemesClick = () => {
    setIsCalendarSelected(false);
    setDisplayCalendar(false);
  };

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <div className="flex justify-between">
          <button
            className={`${
              isCalendarSelected
                ? 'flex-1 bg-blue-500 text-white px-2 py-1 rounded cursor-default mr-2'
                : 'flex-1 bg-white hover:bg-blue-100 text-gray-300 hover:text-blue-500 border hover:border-blue-500 px-2 py-1 rounded mr-2'
            }`}
            onClick={handleCalendarClick}
          >
            Calendrier
          </button>
          <button
            className={`${
              !isCalendarSelected
                ? 'flex-1 bg-blue-500  text-white px-2 py-1 rounded mr-2 cursor-default'
                : 'flex-1 bg-white hover:bg-blue-100 text-gray-300 hover:text-blue-500 border hover:border-blue-500 px-2 py-1 rounded'
            }`}
            onClick={handleThemesClick}
          >
            Themes
          </button>
        </div>

        {displayCalendar ? (
          <>
            <div className="text-center p-5 text-3xl font-black">
              <span>{new Date().getFullYear()}</span>
            </div>
            <div className="text-right mb-12">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                onClick={() => {}}
              >
                Créer année {new Date().getFullYear() + 1}
              </button>
            </div>
            <Calendar />
          </>
        ) : (
          <ThemeCalendar />
        )}
      </CustomLayout>
    </RootLayout>
  );
}
