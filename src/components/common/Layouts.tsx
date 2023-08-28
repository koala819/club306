import IdgLayout from './IdgLayout';
import MainLayout from './MainLayout';
export const Layouts = {
  Main: MainLayout,
  Idg: IdgLayout,
};
export type LayoutKeys = keyof typeof Layouts; // "Main" | "Idg"
