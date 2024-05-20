'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

import { countMembersByMonth } from '@/src/lib/supabase'
import {
  BarElement,
  CategoryScale,
  Chart as Chartjs,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function InscriptionByMonth() {
  const [chartData, setChartData] = useState({
    labels: [''],
    datasets: [{ label: '', data: [] as number[] }],
  })
  const [chartOptions, setChartOptions] = useState({})
  const [nbMembersByMonths, setNbMembersByMonths] = useState<{
    [key: string]: number
  }>({})
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countMembersByMonths = await countMembersByMonth()
        countMembersByMonths !== undefined &&
          setNbMembersByMonths(countMembersByMonths)
      } catch (error) {
        console.log('error fetch data', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (Object.keys(nbMembersByMonths).length !== 0) {
      const sortedAndFilteredLabels = Object.keys(nbMembersByMonths)
        .filter((label) => label.endsWith(selectedYear.toString()))
        .sort((a, b) => {
          const [monthA, yearA] = a.split('-').map(Number)
          const [monthB, yearB] = b.split('-').map(Number)
          return yearA !== yearB ? yearA - yearB : monthA - monthB
        })

      const data = sortedAndFilteredLabels.map(
        (monthYearKey) => nbMembersByMonths[monthYearKey],
      )

      setChartData({
        labels: sortedAndFilteredLabels,
        datasets: [
          {
            label: 'Nombre de membres inscrits par mois',
            data,
          },
        ],
      })

      setChartOptions({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      })
    }
  }, [nbMembersByMonths, selectedYear])

  return (
    <div>
      <Select
        label="Choix année"
        className="max-w-xs"
        defaultSelectedKeys={[`${selectedYear}`]}
        // value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      >
        <SelectItem key="2023" value="2023">
          2023
        </SelectItem>
        <SelectItem key="2024" value="2024">
          2024
        </SelectItem>
      </Select>

      {nbMembersByMonths !== null && (
        <Bar data={chartData} options={chartOptions} />
      )}
    </div>
  )
}
