'use client'

import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

import { countMembersByAge } from '@/lib/supabase'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Age() {
  const [chartData, setChartData] = useState({
    labels: [''],
    datasets: [
      {
        label: '',
        data: [] as number[],
        backgroundColor: [] as string[],
        borderWidth: 1,
      },
    ],
  })
  const [nbMembersByAge, setNbMembersByAge] = useState<MemberStats>({
    age_0_18: [],
    age_18_30: 0,
    age_30_40: 0,
    age_40_50: 0,
    age_more_50: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await countMembersByAge()
        if (result) {
          setNbMembersByAge(result)
        }
      } catch (error) {
        console.log('error fetch data', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (Object.keys(nbMembersByAge).length !== 0) {
      const labels = Object.keys(nbMembersByAge).sort((keyA, keyB) => {
        return keyA.localeCompare(keyB)
      })

      setChartData({
        labels,
        datasets: [
          {
            label: 'Membres',
            data: [
              nbMembersByAge.age_0_18.length,
              nbMembersByAge.age_18_30,
              nbMembersByAge.age_30_40,
              nbMembersByAge.age_40_50,
              nbMembersByAge.age_more_50,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderWidth: 1,
          },
        ],
      })
    }
  }, [nbMembersByAge])

  return (
    <>
      {nbMembersByAge !== null && (
        <div className="flex flex-col lg:flex-row flex-wrap text-center items-center">
          <aside className="p-4 w-full lg:w-1/2">
            <div className="border-2 border-gray-200 py-6 rounded-lg flex ">
              <div className=" flex items-center justify-center w-1/2">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <polygon
                    style={{ fill: '#FFA418' }}
                    points="0,477.703 256,477.703 289.391,256 256,34.297 "
                  />
                  <polygon
                    style={{ fill: '#FF8A1E' }}
                    points="256,34.297 256,477.703 512,477.703 "
                  />
                  <g>
                    <circle
                      style={{ fill: '#324860' }}
                      cx="256"
                      cy="405.359"
                      r="16.696"
                    />
                    <rect
                      x="239.304"
                      y="177.185"
                      style={{ fill: '#324860' }}
                      width="33.391"
                      height="178.087"
                    />
                  </g>
                </svg>
              </div>
              <div className=" flex items-center justify-center w-full">
                <text>
                  {nbMembersByAge.age_0_18.length} membres ont moins de 18 ans :
                  <ul>
                    {nbMembersByAge.age_0_18.map(
                      (mail: string, index: number) => (
                        <li key={index}>
                          <a href={`mailto:${mail}`}>email : {mail}</a>
                        </li>
                      ),
                    )}
                  </ul>
                </text>
              </div>
            </div>
          </aside>
          <aside className="p-4 w-full lg:w-1/2 flex text-center  items-center">
            <Pie data={chartData} />
          </aside>
        </div>
      )}
    </>
  )
}

interface MemberStats {
  age_0_18: string[]
  age_18_30: number
  age_30_40: number
  age_40_50: number
  age_more_50: number
}
