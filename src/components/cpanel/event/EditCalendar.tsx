'use client';
import { useState } from 'react';
import { Events, ThemesEvent } from '@/types/models';
import { useForm, Controller } from 'react-hook-form';
import { cancelEvent, updateEvent } from '@/lib/supabase';
import toast from 'react-hot-toast';

export function EditCalendar({
  year,
  event,
  closeEditor,
  themes,
}: {
  year: number;
  event: Events;
  closeEditor: (isEditing: boolean) => void;
  themes: any;
}) {
  const [editedEvent, setEditedEvent] = useState<Events>(event);
  const [updateOrDelete, setUpdateOrDelete] = useState(false);
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([...themes]);
  const [events, setEvents] = useState<Events[]>([]);

  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      title: editedEvent?.title,
      description: editedEvent?.description,
      dates: editedEvent?.dates,
      theme: editedEvent?.theme,
    },
  });

  const { errors } = formState;

  async function onUpdate(data: any) {
    const responseOnSubmit = await updateEvent(
      data,
      editedEvent?.month,
      editedEvent?.theme,
      year
    );
    // console.log('responseOnSubmit', responseOnSubmit);
    if (responseOnSubmit.status === 200) {
      setEvents((prevEvents) => {
        const updatedEvents = prevEvents.map((event) => {
          if (event.id === editedEvent?.id) {
            return { ...event, ...data };
          }
          return event;
        });
        return updatedEvents;
      });

      toast.success("L'événement a bien été modifié");
      closeEditor(false);
    } else {
      toast.error("L'événement n'a pas pu être modifié");
      closeEditor(false);
    }
  }

  async function onDelete() {
    const response = await cancelEvent(editedEvent?.month);
    // console.log('response', response);
    if (response.status === 200) {
      alert("L'événement a bien été supprimé");
      window.location.reload();
      closeEditor(false);
    } else {
      alert("L'événement n'a pas pu être supprimé" + response);
      closeEditor(false);
    }
  }

  function handleClose() {
    closeEditor(false);
    reset();
  }

  return (
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
        <h2 className="text-2xl mb-4">Modifier l'événement</h2>
        <div className="mb-4">
          <label
            htmlFor="editedTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Titre :
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: 'Ce champ est requis' }}
            render={({ field }) => (
              <input
                type="text"
                id="editedTitle"
                placeholder="Titre"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 ${
                  errors.title ? 'border-red-500' : ''
                }`}
                {...field}
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
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
            value={editedEvent?.theme}
            onChange={(e) =>
              setEditedEvent({
                ...editedEvent,
                theme: parseInt(e.target.value),
              })
            }
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            style={{
              backgroundColor:
                evenThemes.find((theme) => theme.id === editedEvent?.theme)
                  ?.background || '',
              color:
                evenThemes.find((theme) => theme.id === editedEvent?.theme)
                  ?.color || '',
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
        </div>
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
  );
}
