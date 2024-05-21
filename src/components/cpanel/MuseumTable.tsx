'use client'

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { getMuseumInfo } from '@/src/lib/supabase/museum'
import styles from '@/src/styles/MuseumTable.module.css'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

type MuseumRecord = {
  deleted_at: string
  immatriculation: string
  reason: string
  members: {
    first_name: string
    last_name: string
  }
  car_models: {
    name: string
  }
  car_finitions: {
    name: string
  }
  car_colors: {
    name: string
  }
}

const columns = [
  {
    accessorKey: 'deleted_at',
    header: 'Suppression le',
    cell: ({
      row,
    }: {
      row: {
        original: { deleted_at: string }
      }
    }) => {
      const date = new Date(row.original.deleted_at)
      return format(date, 'dd MMMM yyyy', { locale: fr })
    },
  },
  {
    accessorKey: 'members',
    header: 'Membre',
    cell: ({
      row,
    }: {
      row: {
        original: {
          members: { first_name: string; last_name: string }
          car_models: { name: string }
        }
      }
    }) =>
      `${row.original.members.first_name} ${row.original.members.last_name}`,
  },
  {
    accessorKey: 'car_models',
    header: 'Modèle',
    cell: ({ row }: { row: { original: { car_models: { name: string } } } }) =>
      row.original.car_models.name,
  },
  {
    accessorKey: 'car_finitions',
    header: 'Finition',
    cell: ({
      row,
    }: {
      row: { original: { car_finitions: { name: string } } }
    }) => row.original.car_finitions.name,
  },
  {
    accessorKey: 'immatriculation',
    header: 'Immatriculation',
  },
  {
    accessorKey: 'reason',
    header: 'Raison',
  },
  {
    accessorKey: 'car_colors',
    header: 'Couleur',
    cell: ({ row }: { row: { original: { car_colors: { name: string } } } }) =>
      row.original.car_colors.name,
  },
]

const MuseumTable = () => {
  const [records, setRecords] = useState<MuseumRecord[]>([])

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getMuseumInfo()
        if (response.status === 200) {
          const data = await response.json()
          // console.log('check response', data)
          setRecords(data)
        }
      } catch (error: any) {
        toast.error('Error fetching museum info')
      }
    }

    fetch()
  }, [])

  const table = useReactTable({
    data: records,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 50,
      },
    },
  })

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-4xl font-semibold text-gray-800 text-center mb-4">
        Le Musée du Club
      </h3>
      <div className={styles.tableContainer}>
        <div className="h-2" />
        <table className="min-w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ position: 'relative', width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`${styles.resizer} ${
                          header.column.getIsResizing() ? styles.isResizing : ''
                        }`}
                      ></div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow} h-12`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-4" />
        {/* Pagination Controls */}
        <div className="flex items-center justify-between py-4">
          <div className="flex-1 text-sm text-gray-600">
            {table.getFilteredRowModel().rows.length} enregistrements trouvés
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Précédent
            </button>
            <span>
              Page{' '}
              <strong>
                {table.getState().pagination.pageIndex + 1} sur{' '}
                {table.getPageCount()}
              </strong>
            </span>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuseumTable
