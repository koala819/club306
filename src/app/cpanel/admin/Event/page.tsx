'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getAllEvents, getAllThemesEvent } from '@/lib/supabase';
import 'moment/locale/fr';
import RootLayout from '@/app/layout';
import CustomLayout from '../../layout';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Event() {
  const [events, setEvents] = useState<Events[]>([]);
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    title: '',
    description: '',
    dates: '',
    theme: 1, // Vous pouvez définir une valeur par défaut
  });

  useEffect(() => {
    moment.locale('fr');
    async function fetch() {
      const eventResponse = await getAllEvents(new Date().getFullYear());
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse);
      }
      const themeEventResp = await getAllThemesEvent();
      if (themeEventResp !== undefined && Array.isArray(themeEventResp)) {
        setEvenThemes(themeEventResp);
      }
    }
    fetch();
  }, []);

  // Créez une fonction pour ouvrir la boîte de modification
  const openEditBox = (event: Events) => {
    setEditedEvent({
      title: event.title,
      description: event.description,
      dates: event.dates,
      theme: event.theme,
    });
    setIsEditing(true);
  };

  // Créez une fonction pour mettre à jour l'événement
  const updateEvent = () => {
    // Mettez à jour l'événement avec les valeurs de editedEvent
    // Vous devrez implémenter la logique de mise à jour ici

    // Une fois la mise à jour terminée, fermez la boîte de modification
    setIsEditing(false);
  };

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        {isEditing && (
          <div
            className="bg-white p-5 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              width: '500px',
            }}
          >
            <h2 className="text-2xl mb-4">Modifier l'événement</h2>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titre :
              </label>
              <input
                type="text"
                id="title"
                placeholder="Titre"
                value={editedEvent.title}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, title: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description :
              </label>
              <textarea
                id="description"
                placeholder="Description"
                value={editedEvent.description}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dates"
                className="block text-sm font-medium text-gray-700"
              >
                Dates :
              </label>
              <input
                type="text"
                id="dates"
                placeholder="Dates"
                value={editedEvent.dates}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, dates: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
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
                value={editedEvent.theme}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    theme: parseInt(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                style={{
                  backgroundColor:
                    evenThemes.find((theme) => theme.id === editedEvent.theme)
                      ?.background || '',
                  color:
                    evenThemes.find((theme) => theme.id === editedEvent.theme)
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
                onClick={updateEvent}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
              >
                Enregistrer
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
        {events.length > 0 && evenThemes.length > 0 ? (
          <div>
            <div className="mb-12">
              <div className="text-center p-5 text-3xl font-black">
                <span>{new Date().getFullYear()}</span>
              </div>
              <div className="text-right">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                  onClick={() => {}}
                >
                  Créer année {new Date().getFullYear() + 1}
                </button>
              </div>
            </div>
            {events
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
                        e.currentTarget.style.backgroundColor =
                          'rgb(96 165 250)';
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
              )}
          </div>
        ) : (
          <ClipLoader />
        )}
      </CustomLayout>
    </RootLayout>
  );
}

type Events = {
  id: number;
  month: number;
  title: string;
  description: string;
  theme: number;
  dates: string;
};

type ThemesEvent = {
  id: number;
  name: string;
  background: string;
  color: string;
};
