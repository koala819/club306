import { getAllColors, getAllFinitions, getAllModels } from '@/lib/supabase';
import { Color, Finition, Member, Model, Vehicles } from '@/types/models';

export async function listPartsCar({
  setColors,
  setFinitions,
  setModels,
}: {
  setColors: any;
  setFinitions: any;
  setModels: any;
}) {
  {
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
      return true;
    }
  }
}
