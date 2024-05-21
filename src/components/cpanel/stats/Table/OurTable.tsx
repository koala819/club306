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

import { Member, columns } from './Columns'

import { getMembersInfo } from '@/src/lib/supabase/members'
import styles from '@/src/styles/OurTable.module.css'

const OurTable = () => {
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getMembersInfo()
        if (response.status === 200) {
          const data = await response.json()
          console.log('check response', data)
          setMembers(data)
        }
      } catch (error: any) {
        toast.error('error', error)
      }
    }

    fetch()
  }, [])

  const table = useReactTable({
    data: members,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    initialState: {
      pagination: {
        pageSize: 50,
      },
    },
  })

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-4xl font-semibold text-gray-800 text-center mb-4">
        Liste de Nos Membres
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
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
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

export default OurTable
