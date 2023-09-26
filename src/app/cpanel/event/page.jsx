'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getAllEvents, getAllThemesEvent } from '@/lib/supabase';
import('moment/locale/fr');

import ClipLoader from 'react-spinners/ClipLoader';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Event() {
  const [events, setEvents] = useState([]);
  const [evenThemes, setEvenThemes] = useState([]);

  useEffect(() => {
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

  return (
    <>
      {events.length > 0 && evenThemes.length > 0 ? (
        <Timeline lineColor={'#000'}>
          {events
            .slice()
            .sort((a, b) => (a.month ?? 0) - (b.month ?? 0))
            .map((event) =>
              event.title ? (
                // AVEC UN EVENT
                evenThemes[event.theme - 1] !== undefined && (
                  <TimelineItem
                    key={event.month}
                    dateText={event.dates}
                    dateInnerStyle={{
                      background: evenThemes[event.theme - 1].background,
                      color: evenThemes[event.theme - 1].color,
                    }}
                    bodyContainerStyle={{
                      background: evenThemes[event.theme - 1].background,
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                    style={{
                      color: evenThemes[event.theme - 1].background,
                    }}
                  >
                    <div
                      className="p-4"
                      style={{ color: evenThemes[event.theme - 1].color }}
                    >
                      <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                        {event.title}
                      </h3>
                      <p>{event.description}</p>
                    </div>
                  </TimelineItem>
                )
              ) : (
                // SANS EVENT
                <TimelineItem
                  key={event.id}
                  dateComponent={
                    <div
                      className="capitalize"
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: 'rgb(150, 150, 150)',
                        color: '#fff',
                      }}
                    >
                      {moment()
                        .local('fr')
                        .month(event.month - 1)
                        .format('MMMM')}
                    </div>
                  }
                >
                  <div className="p-4">
                    <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                      {''}
                    </h3>
                  </div>
                </TimelineItem>
              )
            )}
        </Timeline>
      ) : (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center  bg-white p-4 rounded-lg shadow-lg text-black">
            <p className="text-xl font-semibold mb-4">Veuillez patienter</p>
            <ClipLoader
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p className="mt-8 text-black">Chargement des données ...</p>
          </div>
        </div>
      )}
    </>
  );
}
