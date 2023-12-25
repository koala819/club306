'use client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';
import moment from 'moment';
import {
  cancelEvent,
  getAllEvents,
  getAllThemesEvent,
  updateEvent,
} from '@/lib/supabase';
import { Events, ThemesEvent } from '@/types/models';
import toast from 'react-hot-toast';

export default function Calendar({ year }: { year: number }) {
  const [updateOrDelete, setUpdateOrDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [events, setEvents] = useState<Events[]>([]);
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([]);
  const [editedEvent, setEditedEvent] = useState<Events>();
  const { handleSubmit, control, formState, setValue, reset } = useForm({
    defaultValues: {
      title: editedEvent?.title,
      description: editedEvent?.description,
      dates: editedEvent?.dates,
      theme: editedEvent?.theme,
    },
  });
  const { errors } = formState;

  useEffect(() => {
    moment.locale('fr');
    async function fetch() {
      const eventResponse = await getAllEvents(year);
      console.log('eventResponse', eventResponse);
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse);
      }
      const themeEventResp = await getAllThemesEvent();
      if (themeEventResp !== undefined && Array.isArray(themeEventResp)) {
        setEvenThemes(themeEventResp);
      }
    }
    fetch();
  }, [year]);

  const openEditBox = (event: Events) => {
    // console.log('openEditBox', event);
    setEditedEvent({
      title: event.title,
      description: event.description,
      dates: event.dates,
      month: event.month,
      theme: event.theme,
      year: event.year,
    });
    setValue('title', event.title);
    setValue('description', event.description);
    setValue('dates', event.dates);
    setValue('theme', event.theme);
    setIsEditing(true);
  };

  const onUpdate = async (data: any) => {
    const responseOnSubmit = await updateEvent(
      data,
      editedEvent?.month,
      editedEvent?.theme,
      year
    );
    if (responseOnSubmit.status === 200) {
      // Update the local state with the new event data
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
      setIsEditing(false);
    } else {
      toast.error("L'événement n'a pas pu être modifié");
      setIsEditing(false);
    }
  };
  // if (responseOnSubmit.status === 200) {
  //   alert("L'événement a bien été modifié");
  //   window.location.reload();
  //   setIsEditing(false);
  // } else {
  //   alert("L'événement n'a pas pu être modifié" + responseOnSubmit);
  //   setIsEditing(false);
  // }
  // };

  async function onDelete() {
    const response = await cancelEvent(editedEvent?.month);
    console.log('response', response);
    if (response.status === 200) {
      alert("L'événement a bien été supprimé");
      window.location.reload();
      setIsEditing(false);
    } else {
      alert("L'événement n'a pas pu être supprimé" + response);
      setIsEditing(false);
    }
  }

  function handleClose() {
    setIsEditing(false);
    reset();
  }

  return (
    <div>
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
      )}
      {events.length > 0 && evenThemes.length > 0 ? (
        events
          .slice()
          .sort((a, b) => (a.month ?? 0) - (b.month ?? 0))
          .map((event) =>
            event.title ? (
              // AVEC UN EVENT
              evenThemes[event.theme - 1] !== undefined && (
                <div
                  key={event.month}
                  onClick={() => openEditBox(event)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(96 165 250)';
                    e.currentTarget.style.color = 'rgb(0 0 0)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      evenThemes[event.theme - 1].background;
                    e.currentTarget.style.color =
                      evenThemes[event.theme - 1].color;
                  }}
                  className="p-5 cursor-pointer rounded mb-5 shadow-lg"
                  style={{
                    backgroundColor: evenThemes[event.theme - 1].background,
                    color: evenThemes[event.theme - 1].color,
                  }}
                >
                  <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                    {event.title}
                  </h3>
                  <p>{event.description}</p>
                </div>
              )
            ) : (
              // SANS EVENT
              <div
                key={event.id}
                onClick={() => openEditBox(event)}
                className="p-5 cursor-pointer rounded mb-5 shadow-lg bg-gray-400 hover:bg-blue-400 hover:text-black text-white capitalize"
              >
                <span>
                  {moment()
                    .month(event.month - 1)
                    .format('MMMM')}
                </span>
                <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                  {''}
                </h3>
              </div>
            )
          )
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}
