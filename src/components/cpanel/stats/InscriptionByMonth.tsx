'use client';
import { useState, useEffect } from 'react';
import { countMembersByMonth } from '@/lib/supabase';
import { Bar } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function InscriptionByMonth() {
  const [chartData, setChartData] = useState({
    labels: [''],
    datasets: [{ label: '', data: [] as number[] }],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [nbMembersByMonths, setNbMembersByMonths] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countMembersByMonths = await countMembersByMonth();
        countMembersByMonths !== undefined &&
          setNbMembersByMonths(countMembersByMonths);
      } catch (error) {
        console.log('error fetch data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(nbMembersByMonths).length !== 0) {
      const labels = Object.keys(nbMembersByMonths).sort((keyA, keyB) => {
        return keyA.localeCompare(keyB);
      });

      const data = labels.map(
        (monthYearKey) => nbMembersByMonths[monthYearKey]
      );

      setChartData({
        labels,
        datasets: [
          {
            label: 'Nombre de membres inscrits par mois',
            data,
          },
        ],
      });

      setChartOptions({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
          },
          // title: {
          //   display: true,
          //   text: 'Nombre de membres par mois',
          // },
        },
      });
    }
  }, [nbMembersByMonths]);

  return (
    <div>
      {nbMembersByMonths !== null && (
        <Bar data={chartData} options={chartOptions} />
      )}
    </div>
  );
}

interface MemberCounts {
  [key: string]: number;
}
