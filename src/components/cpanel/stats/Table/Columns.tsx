'use client'

import { ColumnDef } from '@tanstack/react-table'

export type Member = {
  last_name: string
  first_name: string
  address: string
  zip_code: string
  town: string
  country: string
  email: string
  phone: string
  cars: Array<{ car_models: { name: string }; car_colors: { name: string } }>
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'last_name',
    header: 'Nom',
  },
  {
    accessorKey: 'first_name',
    header: 'Prénom',
  },
  {
    accessorKey: 'address',
    header: 'Adresse',
  },
  {
    accessorKey: 'zip_code',
    header: 'CP',
  },
  {
    accessorKey: 'town',
    header: 'Ville',
  },
  {
    accessorKey: 'country',
    header: 'Pays',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Tel',
  },
  {
    accessorKey: 'cars',
    header: 'Modèle',
    cell: ({ row }) => (
      <div>
        {row.original.cars.map((car, carIndex) => (
          <div key={carIndex}>{car.car_models.name}</div>
        ))}
      </div>
    ),
  },
  {
    accessorKey: 'cars',
    header: 'Couleur',
    cell: ({ row }) => (
      <div>
        {row.original.cars.map((car, carIndex) => (
          <div key={carIndex}>{car.car_colors.name}</div>
        ))}
      </div>
    ),
  },
]
