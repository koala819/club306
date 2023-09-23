import dayjs from 'dayjs';

const currentYear = dayjs().year();
const startYear = currentYear - 100;
const endYear = currentYear - 18;
const years = range(startYear, endYear);
const months = [
  'Janvier',
  'Fevrier',
  'Mas',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre',
];

function range(start: number, end: number, step: number = 1): number[] {
  const years: number[] = [];
  for (let year = start; year <= end; year += step) {
    years.push(year);
  }
  return years;
}
// Fonction pour obtenir l'année à partir d'une date
function getYear(date: Date) {
  return date.getFullYear();
}

// Fonction pour obtenir le mois (0-11) à partir d'une date
function getMonth(date: Date) {
  return date.getMonth();
}

export { getYear, getMonth, months, years };
