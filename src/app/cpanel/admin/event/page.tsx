'use client';
import Calendar from '@/components/cpanel/event/Calendar';
import ThemeCalendar from '@/components/cpanel/event/ThemeCalendar';
import { checkAndCreateEvents } from '@/lib/checkAndCreateEvents';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@nextui-org/react';
import { checkCurrentYearForCalendar } from '@/lib/supabase';

export default function Event() {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(currentYear);
  const [displayCalendar, setDisplayCalendar] = useState(true);
  const [isCalendarSelected, setIsCalendarSelected] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);

  useEffect(() => {
    async function checkPreviousYear() {
      const hasPreviousYearData = await checkCurrentYearForCalendar(year - 1);
      setCanGoBack(hasPreviousYearData);
    }

    async function checkNextYear() {
      const hasNextYearData = await checkCurrentYearForCalendar(year + 1);
      setCanGoNext(hasNextYearData);
    }

    checkPreviousYear();
    checkNextYear();
  }, [year]);

  const handleCalendarClick = () => {
    setIsCalendarSelected(true);
    setDisplayCalendar(true);
  };

  const handleThemesClick = () => {
    setIsCalendarSelected(false);
    setDisplayCalendar(false);
  };

  async function handleAddNewYear() {
    const createNewCalendar = await checkAndCreateEvents();

    if (createNewCalendar?.status === 306) {
      toast.error('Impossible de creer le calendrier');
    } else if (createNewCalendar?.status === 200) {
      toast.success('Le nouveau calendrier est prêt');
    }
  }

  function goToNextYear() {
    if (year < currentYear + 1) {
      setYear(year + 1);
    }
  }

  function goToPreviousYear() {
    if (year > currentYear - 1) {
      setYear(year - 1);
    }
  }

  return (
    <>
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
            {canGoBack && <Button onClick={goToPreviousYear}>Précédent</Button>}
            <span>{year}</span>
            {year < currentYear + 1 && canGoNext && (
              <Button onClick={goToNextYear}>Suivant</Button>
            )}
          </div>
          <div className="text-right mb-12">
            {year + 1 === currentYear + 1 && (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                onClick={() => {
                  handleAddNewYear();
                }}
              >
                Créer année {year + 1}
              </button>
            )}
          </div>
          <Calendar year={year} />
        </>
      ) : (
        <ThemeCalendar />
      )}
    </>
  );
}
