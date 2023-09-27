'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<BsFillSunFill />}
        endContent={<BsMoonFill />}
        onChange={toggleTheme}
      ></Switch>
    </div>
  );
}
