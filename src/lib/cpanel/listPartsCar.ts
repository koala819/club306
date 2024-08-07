import { Color, Finition, Member, Model, Vehicles } from '@/src/types/models'

import { getAllColors, getAllFinitions, getAllModels } from '@/src/lib/supabase'

export async function listPartsCar({
  setColors,
  setFinitions,
  setModels,
}: {
  setColors: any
  setFinitions: any
  setModels: any
}) {
  {
    const carColor = await getAllColors()
    if (carColor !== null && carColor.data !== null) {
      const fetchedColors: Color[] = carColor.data.map((color: any) => {
        return {
          id: color.id,
          name: color.name,
          hexa: color.hexa,
        }
      })
      setColors(fetchedColors)
    }

    const carFinition = await getAllFinitions()
    if (carFinition !== null && carFinition.data !== null) {
      const fetchedFinitions: Finition[] = carFinition.data.map(
        (color: any) => {
          return {
            id: color.id,
            name: color.name,
          }
        },
      )

      // Tri des finitions par ordre alphabétique des noms
      const sortedFinitions = fetchedFinitions.sort((a, b) =>
        a.name.localeCompare(b.name),
      )
      setFinitions(sortedFinitions)
    }

    const carModel = await getAllModels()
    if (carModel !== null && carModel.data !== null) {
      const fetchedModels: Model[] = carModel.data.map((color: any) => {
        return {
          id: color.id,
          name: color.name,
        }
      })
      setModels(fetchedModels)
      return true
    }
  }
}
