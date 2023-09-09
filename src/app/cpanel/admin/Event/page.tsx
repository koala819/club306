'use client';
import RootLayout from '@/app/layout';
import CustomLayout from '../../layout';
import Calendar from './components/Calendar';

export default function Event() {
  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <div className="mb-12">
          <div className="text-center p-5 text-3xl font-black">
            <span>{new Date().getFullYear()}</span>
          </div>
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
              onClick={() => {}}
            >
              Créer année {new Date().getFullYear() + 1}
            </button>
          </div>
        </div>
        <Calendar />
      </CustomLayout>
    </RootLayout>
  );
}

type Events = {
  id: number;
  month: number;
  title: string;
  description: string;
  theme: number;
  dates: string;
};

type ThemesEvent = {
  id: number;
  name: string;
  background: string;
  color: string;
};
