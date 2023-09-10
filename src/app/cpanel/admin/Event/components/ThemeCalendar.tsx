'use client';
import { getAllThemesEvent } from '@/lib/supabase';
import { useEffect, useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
import { PhotoshopPicker } from 'react-color';
import { deleteThemeEvent, updateThemeEvent } from '@/lib/supabase';

export default function TemeCalendar() {
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  //   const [updateOrDelete, setUpdateOrDelete] = useState(false);
  const [color, setColor] = useState<string>('');
  const [displayPicker, setDisplayPicker] = useState(false);
  const [comeFrom, setComeFrom] = useState('');
  const [editedThemeEvent, setEditedThemeEvent] = useState({
    id: 0,
    name: '',
    background: '',
    color: '',
  });

  useEffect(() => {
    async function fetch() {
      const themeEventResp = await getAllThemesEvent();
      if (themeEventResp !== undefined && Array.isArray(themeEventResp)) {
        setEvenThemes(themeEventResp);
      }
    }
    fetch();
  }, []);

  const openEditBox = (event: ThemesEvent) => {
    setEditedThemeEvent({
      id: event.id,
      name: event.name,
      background: event.background,
      color: event.color,
    });
    setIsEditing(true);
  };

  const onUpdate = async () => {
    const response = await updateThemeEvent(
      color,
      editedThemeEvent.name,
      comeFrom
    );
    if (response.status === 200) {
      setIsEditing(false);
      window.location.reload();
      setDisplayPicker(false);
    }
  };

  async function onDelete() {
    // console.log('onDelete with id', editedThemeEvent.id);
    const responseDelete = await deleteThemeEvent(editedThemeEvent.id);
    console.log('responseDelete', responseDelete);
    if (responseDelete !== undefined && responseDelete.status === 200) {
      alert("le theme de l'événement a bien été supprimé");
      window.location.reload();
    } else if (responseDelete !== undefined && responseDelete.status === 405) {
      alert('impossible de supprimer le theme car il est encore utilisé');
    }
  }

  function handleClose() {
    setIsEditing(false);
    // reset();
  }

  const handleColorChange = (newColor: { hex: string }) => {
    setColor(newColor.hex);
  };

  const handleColorOk = async () => {
    if (comeFrom === 'background') {
      setEditedThemeEvent((prevThemeEvent) => ({
        ...prevThemeEvent,
        background: color,
      }));
    } else if (comeFrom === 'color') {
      setEditedThemeEvent((prevThemeEvent) => ({
        ...prevThemeEvent,
        color: color,
      }));
    }
    setDisplayPicker(false);
  };

  return (
    <div className="mt-12">
      {displayPicker && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-[1000]">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">Palette de couleurs</h2>
            <PhotoshopPicker
              color={color}
              onChange={handleColorChange}
              onAccept={handleColorOk}
              onCancel={() => setDisplayPicker(false)}
            />
          </div>
        </div>
      )}
      {isEditing && (
        <div
          className="bg-white p-5 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            width: '500px',
          }}
        >
          <h2 className="text-2xl mb-4">Modifier le thème</h2>
          <div className="mb-4">
            <label
              htmlFor="editedTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Nom :
            </label>
            <input
              type="text"
              id="editedTitle"
              placeholder="Titre"
              defaultValue={editedThemeEvent.name}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center mb-2">
            <p className="flex-1 text-center">Couleur du fond :</p>
            <div
              className="flex-1 h-16 w-full cursor-pointer"
              onClick={() => {
                setDisplayPicker(true);
                setColor(`${editedThemeEvent.background}`);
                setComeFrom('background');
              }}
              style={{ backgroundColor: `${editedThemeEvent.background}` }}
            >
              <span
                className="flex justify-center items-center h-16"
                style={{ color: `${editedThemeEvent.color}` }}
              >
                texte
              </span>
            </div>
          </div>
          <div className="flex items-center  mb-8">
            <p className="flex-1 text-center">Couleur du texte :</p>
            <div
              className="flex-1 h-16 w-full cursor-pointer"
              onClick={() => {
                setDisplayPicker(true);
                setColor(`${editedThemeEvent.color}`);
                setComeFrom('color');
              }}
              style={{ backgroundColor: `${editedThemeEvent.color}` }}
            ></div>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Créer nouvelle couleur
            </button>
            <button
              onClick={() => onUpdate()}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Mettre à jour
            </button>

            <button
              onClick={() => onDelete()}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Supprimer
            </button>

            <button
              onClick={() => handleClose()}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      {evenThemes.length > 0 &&
        evenThemes
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((theme) => (
            <div
              key={theme.id}
              onClick={() => {
                openEditBox(theme);
              }}
              className="p-5 cursor-pointer rounded mb-5 shadow-lg capitalize hover:border-2 hover:border-black"
              style={{ backgroundColor: theme.background, color: theme.color }}
            >
              <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                {theme.name}
              </h3>
            </div>
          ))}
    </div>
  );
}
type ThemesEvent = {
  id: number;
  name: string;
  background: string;
  color: string;
};
