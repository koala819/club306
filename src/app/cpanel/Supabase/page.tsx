'use client';
import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment-timezone';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { backupTable, listFilesInFolder } from '@/lib/backupSupabase';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Supabase() {
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const fileList = await listFilesInFolder();
        setFiles(fileList);
      } catch (error) {
        console.error('Erreur lors de la récupération des fichiers :', error);
      }
    }

    fetchFiles();
  }, []);

  function formatDateAndTime(timestamp: string) {
    const gmtPlus2 = moment.tz(timestamp, 'Europe/Paris');
    const formattedDate = gmtPlus2.format('DD MMM YYYY');
    const formattedTime = gmtPlus2.format('HH[h]mm');
    return `Date de création : ${formattedDate} à ${formattedTime}`;
  }

  async function recordMembers(tableName: string) {
    const response = await backupTable(tableName);
    if (response.success) {
      alert('Backup effectué avec succès');
      window.location.reload();
    }
  }

  return (
    <RootLayout hideFooter hideNavbar>
      <CustomLayout>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h1 className="text-2xl mb-4">
            Explorateur de fichiers Google Drive
          </h1>
          {files.length > 0 ? (
            <ul className="space-y-2">
              {files
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((file) => (
                  <li
                    key={file.id}
                    className="bg-gray-100 p-2 rounded-lg flex justify-between items-center hover:bg-gray-200"
                  >
                    <div>
                      <strong>{file.name}</strong>
                      <div className="text-gray-500 text-xs">
                        {formatDateAndTime(file.createdTime)}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <ClipLoader
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div>
        <div className="">
          <button
            onClick={() => recordMembers('car_colors')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table car_colors
          </button>
          <button
            onClick={() => recordMembers('car_finitions')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table car_finitions
          </button>
          <button
            onClick={() => recordMembers('car_models')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table car_models
          </button>
          <button
            onClick={() => recordMembers('cars')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table cars
          </button>
          <button
            onClick={() => recordMembers('members')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table members
          </button>
          <button
            onClick={() => recordMembers('museum')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table museum
          </button>
          <button
            onClick={() => recordMembers('partners_codePromo')}
            className="mt-4 ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            backup table partners
          </button>
        </div>
      </CustomLayout>
    </RootLayout>
  );
}

interface GoogleDriveFile {
  id: string;
  name: string;
  createdTime: string;
}
