'use client';
import { getAllThemesEvent } from '@/lib/supabase';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PhotoshopPicker } from 'react-color';

export default function TemeCalendar() {
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updateOrDelete, setUpdateOrDelete] = useState(false);
  const [color, setColor] = useState<string>('');
  const [displayPicker, setDisplayPicker] = useState(false);
  const [editedThemeEvent, setEditedThemeEvent] = useState({
    name: '',
    background: '',
    color: '',
  });
  const { handleSubmit, control, formState, setValue, reset } = useForm({
    defaultValues: {
      name: editedThemeEvent.name,
      background: editedThemeEvent.background,
      color: editedThemeEvent.color,
    },
  });
  const { errors } = formState;
  const colorPickerRef = useRef<HTMLDivElement | null>(null);

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
    // console.log('openEditBox', event);
    setEditedThemeEvent({
      name: event.name,
      background: event.background,
      color: event.color,
    });
    setValue('name', event.name);
    setValue('background', event.background);
    setValue('color', event.color);
    setIsEditing(true);
  };

  const onUpdate = async (data: any) => {
    console.log('onUpdate', data);
    // const responseOnSubmit = await updateEvent(
    //   data,
    //   editedEvent.month,
    //   editedEvent.theme
    // );
    // if (responseOnSubmit.status === 200) {
    //   alert("L'événement a bien été modifié");
    //   window.location.reload();
    //   setIsEditing(false);
    // } else {
    //   alert("L'événement n'a pas pu être modifié" + responseOnSubmit);
    //   setIsEditing(false);
    // }
  };

  async function onDelete() {
    console.log('onDelete');
    // const response = await cancelEvent(editedEvent.month);
    // console.log('response', response);
    // if (response.status === 200) {
    //   alert("L'événement a bien été supprimé");
    //   window.location.reload();
    //   setIsEditing(false);
    // } else {
    //   alert("L'événement n'a pas pu être supprimé" + response);
    //   setIsEditing(false);
    // }
  }

  function handleClose() {
    setIsEditing(false);
    reset();
  }
  console.log('displayPicker', displayPicker);
  return (
    <div className="mt-12">
      {displayPicker && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-[1000]">
          <div
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            ref={colorPickerRef}
          >
            <h2 className="text-lg font-semibold mb-2">Palette de couleurs</h2>
            <PhotoshopPicker
              color={color}
              onChange={() => {}}
              onAccept={() => {}}
              onCancel={() => setDisplayPicker(false)}
            />
          </div>
        </div>
      )}
      {isEditing && (
        <form
          onSubmit={
            updateOrDelete ? handleSubmit(onUpdate) : handleSubmit(onDelete)
          }
        >
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
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: 'Ce champ est requis' }}
                render={({ field }) => (
                  <input
                    type="text"
                    id="editedTitle"
                    placeholder="Titre"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div
              className="flex items-center mb-2"
              onClick={() => {
                // setDisplayPicker(true);
                // setColor(`#${colorItem.hexa}`);
                // setInitialColor(colorItem.hexa);
              }}
            >
              <p className="flex-1 text-center">Couleur du fond :</p>
              <div
                className="flex-1 h-16 w-full cursor-pointer"
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
                  // setInitialColor(colorItem.hexa);
                }}
                style={{ backgroundColor: `${editedThemeEvent.color}` }}
              ></div>
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="editedDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Description :
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{ required: 'Ce champ est requis' }}
                render={({ field }) => (
                  <textarea
                    id="editedDescription"
                    placeholder="Description"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 ${
                      errors.description ? 'border-red-500' : ''
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="editedDates"
                className="block text-sm font-medium text-gray-700"
              >
                Dates :
              </label>
              <Controller
                name="dates"
                control={control}
                defaultValue=""
                rules={{ required: 'Ce champ est requis' }}
                render={({ field }) => (
                  <input
                    type="text"
                    id="editedDates"
                    placeholder="Dates"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 ${
                      errors.dates ? 'border-red-500' : ''
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.dates && (
                <p className="text-red-500">{errors.dates.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="theme"
                className="block text-sm font-medium text-gray-700"
              >
                Thème :
              </label>
              <select
                id="theme"
                value={editedThemeEvent.theme}
                onChange={(e) =>
                  setEditedThemeEvent({
                    ...editedThemeEvent,
                    theme: parseInt(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                style={{
                  backgroundColor:
                    evenThemes.find(
                      (theme) => theme.id === editedThemeEvent.theme
                    )?.background || '',
                  color:
                    evenThemes.find(
                      (theme) => theme.id === editedThemeEvent.theme
                    )?.color || '',
                }}
              >
                {evenThemes.map((theme) => (
                  <option
                    key={theme.id}
                    value={theme.id}
                    style={{
                      backgroundColor: theme.background,
                      color: theme.color,
                    }}
                  >
                    {theme.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={() => setUpdateOrDelete(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
              >
                Enregistrer
              </button>
              <button
                type="submit"
                onClick={() => setUpdateOrDelete(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
              >
                Supprimer
              </button>
              <button
                onClick={() => handleClose()}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Fermer
              </button>
            </div>
          </div>
        </form>
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
