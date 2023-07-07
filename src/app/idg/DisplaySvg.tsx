'use client';
export const DisplaySVG = ({
  name,
  color,
}: {
  name: string | null | undefined;
  color: string | null | undefined;
}) => {
  return (
    <div>
      {name === 'Break' && (
        <svg
          id="Break"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="40 80 610 200"
        >
          <defs>
            <style>{`.cls-1{fill: #${color};}`}</style>
          </defs>
          <g>
            <path
              className="cls-1"
              d="m606.84,256.78c6.34-.65,12.71-1.42,18.89-2.85,2.21-.66,4.59-1,5.95-2.99,3.04-4.44,3.78-10.42,5.28-15.55,1.23-4.66,3.46-9.1,5.19-13.48,1.24-2.82,1.6-5.88,1.37-8.77-.27-3.01-2.49-4.34-5.3-4.84-.66-.13-1.12-.68-1.17-1.32,0,0-.38-4.03-.38-4.03,0,0,1.52,1.4,1.52,1.4l-5.2.08c-2.7.25-5.29-.81-6.97-2.97,0,0-.87-.97-.87-.97-.88-.92-4.23-4.75-5.21-5.8,0,0-3.47-3.87-3.47-3.87,0,0-.87-.97-.87-.97,0,0-.22-.24-.22-.24-.02-.02-.1-.11-.16-.2,0,0-.19-.26-.19-.26-1.81-2.56.36-6.14,3.4-5.95,0,0,.32,0,.32,0l1.3-.02,2.6-.04,5.2-.07-2.12,2.38c-.65-2.27-3.6-2.82-5.66-3.65-8.77-2.94-17.88-4.89-26.97-6.75-24.34-4.82-49.27-8.51-73.9-11.8-6.19-.85-12.38-1.63-18.58-2.4-4.77-.72-11.97-.9-16.07-3.44-27.98-16.38-55.97-32.73-84.73-47.61-5.52-2.82-11.32-5.73-17.04-7.87-.63-.31-2.48-.47-3.2-.61-10.74-1.17-21.59-1.54-32.41-1.99-78.23-2.22-156.93-2.72-234.93,4.32,0,0-.58.06-.58.06-.07,0-.25.02-.24.03.14.02.29-.02.41-.1,0,0-.09.06-.09.06-.07.04-.15.08-.23.12-6.27,4.64-11.49,10.72-16.99,16.43-8.45,9.11-16.72,18.5-24.83,27.95l-2.03-4.89s2.05.19,2.05.19c0,0,1.03.1,1.03.1,8.08.13,13.3,9.12,9.16,16.08,0,0-.38.63-.38.63,0,0-.31.42-.31.42-1.1,1.57-3.78,5.02-4.92,6.61-3.97,5.52-7.69,11.21-11.18,17.05,0,0-2.1,3.59-2.1,3.59-2.26,3.72-6.74,5.57-10.93,5.18,0,0-2.06-.02-2.06-.02,0,0,2.26-2.26,2.26-2.26,0,0-.15,13.09-.15,13.09,0,.74-.41,1.4-.98,1.78-2.32,1.61-4.95,3.44-5.78,6.1-.19,1.27.03,2.62.18,4.04.84,5.9,2.13,11.97,4.54,17.44,0,0,.37.78.37.78,0,0,.42.7.42.7,0,0,.21.35.21.35l.22.28c.16.19.25.36.5.59,1.49,1.58,2.99,2.7,3.9,4.9.72,3.26-2.25,6.3,1.32,8.64.21.14.47.33.61.37,1.65.62,3.36,1,5.1,1.41,19.36,4.2,39.01,7.48,58.54,10.95-19.73-2.59-39.42-5.06-59.03-8.61-2.25-.52-4.7-.71-6.7-1.95-1.63-1-2.92-2.78-3.08-4.72-.16-1.56.2-2.94.39-4.08.05-.42.16-.82.04-1.15-.56-1.18-2.29-2.47-3.29-3.55-.21-.18-.49-.53-.73-.81,0,0-.37-.44-.37-.44,0,0-.29-.44-.29-.44,0,0-.56-.89-.56-.89-.7-1.45-1.52-2.97-2.02-4.47-2.13-6.12-3.85-12.23-4.23-18.76.14-4.6,4.03-7.75,7.48-10.21,0,0-.98,1.78-.98,1.78,0,0-.15-13.09-.15-13.09-.01-1.23.97-2.24,2.21-2.26h.05s2.06-.02,2.06-.02c2.64.19,5.45-.73,6.8-3.09,4.62-8.46,9.73-16.8,15.37-24.62,0,0,2.38-3.37,2.38-3.37l.3-.42s.13-.26.13-.26c1.73-2.91-.49-7.06-3.87-7.25-.08-.02-.27-.03-.44-.05,0,0-.51-.04-.51-.04,0,0-1.03-.08-1.03-.08,0,0-2.05-.16-2.05-.16-2.33-.1-3.64-3.16-2.03-4.89,12.2-14.49,24.1-29,37.66-42.35,1.19-1.12,2.4-2.22,3.83-3.32.87-.56,1.28-1.1,3.19-1.76.49-.19,1.19-.23,1.7-.29,3.52-.36,7.03-.78,10.55-1.09,74.96-6.71,150.3-6.97,225.46-4.42,9.43.4,18.86.83,28.29,1.66,3.38.38,7,.48,10.23,1.74,6.3,2.41,11.82,5.25,17.47,8.14,28.8,15.09,56.63,31.88,84.49,48.53,1.35.76,2.83,1.27,4.36,1.52,0,0,9.2,1.32,9.2,1.32,9.06,1.23,18.81,2.77,27.88,4.12,21.63,3.42,43.38,7.04,64.76,11.87,10,2.33,20.09,4.63,29.69,8.47,2.56.95,5.04,2.73,5.87,5.48.04.13.08.28.12.42.04.17.06.26.11.56.16,1.15-.65,2.21-1.8,2.36-2.17.04-6.07-.07-8.12-.08,0,0-1.3-.02-1.3-.02,0,0-.32,0-.32,0-.09,0-.27,0-.22,0,0,0,.02-.01.04-.02.09-.08.06-.06.04-.14,0-.02-.02-.04-.02-.03,0,0-.01,0,.04.05,0,0,.21.25.21.25l.84.99s3.36,3.97,3.36,3.97c0,0,3.36,3.97,3.36,3.97,0,0,1.68,1.98,1.68,1.98,0,0,.84.99.84.99,0,0,.42.5.42.5.5.6,1.14,1.04,1.89,1.28.72.24,1.27.2,2.1.21,0,0,5.2.08,5.2.08.8-.01,1.47.62,1.52,1.4,0,0,.26,4.04.26,4.04,0,0-1.17-1.32-1.17-1.32,1.68.38,3.47.98,4.95,2.32,1.52,1.29,2.29,3.36,2.39,5.12.26,3.49-.52,6.88-1.87,9.9-1.3,2.99-2.76,5.8-3.98,8.7-2.58,5.81-3.33,12.41-6.33,18.09-.85,1.47-1.77,2.93-3.35,3.77-1.55.74-3.13,1.06-4.7,1.41-6.32,1.18-12.69,1.67-19.07,2.04h0Z"
            />
            <path
              className="cls-1"
              d="m448.03,149.5l-3.68-10.53c-.18-.39.36-.78.68-.53,8.72,5.82,17.56,11.8,26.22,17.73,0,0,2.61,1.78,2.61,1.78,0,0,.65.45.65.45.09.06.24.18.39.29,0,0,.42.35.42.35,3,2.75,1.68,8.25-2.31,9.28-.64.21-1.43.24-2.1.24-2.46.02-26.9,0-30.02,0-74.91-.34-152.61-1.79-227.42-4.93,0,0-6.33-.3-6.33-.3-2.12-.14-4.8-.1-6.86-.8-8.74-2.42-12.75-9.66-7.47-17.82,6.15-8.98,14.74-15.67,23.12-22.36,6.72-5.17,13.74-9.97,21.22-13.98,3.75-1.91,7.66-3.81,11.85-4.44-14.18,3.8-39.42,26.63-49.01,38.12-2.84,3.6-7.58,9.48-3.01,13.35,2.4,1.9,5.67,2.68,8.8,2.58,3.57.07,53.37.71,58.39.78,57.4.92,119.49,2.48,176.84,4.75,0,0,25.26,1.08,25.26,1.08l3.16.14,1.58.07.39.02s.23,0,.23,0c1.29.06,2.28-1.51,1.84-2.7-.15-.68-.93-1.18-1.46-1.59-9.16-7.02-18.41-14.19-27.48-21.31,0,0,.72-.51.72-.51,0,0,2.79,10.8,2.79,10.8h0Z"
            />
          </g>
          <path
            className="cls-1"
            d="m109.47,109.8c28.15-.98,59.13-1.52,87.43-1.87,1.16.04,2.79-.16,3.95.14,4.81,1.11,5.74,7.81,1.48,10.27-6.8,4.62-26.31,17.59-33.45,22.33-3.87,2.59-7.78,5.15-11.68,7.7-3.89,2.61-8.13,5.38-12.67,6.94-4.61,1.66-9.48,2.62-14.36,2.7-2.2.06-4.9-.11-7.06-.11-11.66-.25-23.31-.63-34.97-1.3-.32-.02-.56-.29-.54-.61.02-.3.25-.53.54-.54,9.33-.54,18.65-.89,27.98-1.13,16.49-.32,24.47.39,38.59-9.72,12.84-8.48,32.47-21.23,45.43-29.57,1.13-.57,1.4-1.97.48-2.87-.52-.53-1.25-.46-1.97-.47-1.06,0-4.14-.05-5.25-.05-27.14-.36-56.96-.9-83.93-1.83h0Z"
          />
          <path
            className="cls-1"
            d="m174.1,175.62c-.1,12.14-16.02,17.94-25.09,10.54-6.96-5.3-6.97-15.79,0-21.09,9.07-7.41,25-1.59,25.1,10.55h0Zm0,0c-.23-11.63-15.39-15.61-22.98-8.08-4.76,4.33-4.77,11.84,0,16.17,7.59,7.54,22.76,3.54,22.98-8.09h0Z"
          />
        </svg>
      )}
      {name === '3 Portes' && (
        <svg
          id="Break"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="10 50 610 200"
        >
          <defs>
            <style>{`.cls-1{fill: #${color};}`}</style>
          </defs>
          <g>
            <path
              className="cls-1"
              d="m30.24,231.04c.01.09.09.27-.05.31-.31-.17-.42-.56-.57-.86-.66-1.75-.84-3.63-.95-5.48-.15-1.45.55-2.82,1.41-3.95,0,0,0,.28,0,.28-5.46-5.43-9.16-14.68-9.36-21.34-3.97-7.82-7.77-21.49,5.03-22.55,0,0-.99,1.06-.99,1.06-.22-3.97-.49-7.93-.31-11.93.03-.64.09-1.45.44-2.09.93-1.42,3.15-.32,4.26-.21,1.1.19,2,.21,2.66-.61,3.71-4.25,7.06-8.83,10.51-13.29,0,0,5.68-7.52,5.68-7.52.37-.49,1.02-1.34,1.34-1.81.55-.76-.04-1.93-.94-1.98-3.74-.24-7.53-.47-11.22-.42-2.62.2-4.96,1.15-7.47,1.87-1.04.33-2.15-.24-2.49-1.28-.17-.55-.1-1.11.16-1.58,1.8-3.24,4.11-5.99,6.45-8.56,2.45-2.64,4.89-5.19,7.39-7.67,6.21-4.75,12.31-9.66,18.52-14.5,18.46-14.91,39.51-26.2,60.48-37.17,0,0-1.61,2.62-1.61,2.62,0,0-.04-5.76-.04-5.76-.25-3.1,1.98-6.01,5.18-6.25,0,0,.36-.04.36-.04l.71-.09,11.44-1.4c53.55-6.55,107.62-8.79,161.54-6.84,17.45.66,34.72,1.63,52.13,3.33,5.58.98,10.97,2.8,16.07,5.28,7.13,3.68,14.66,7.86,21.6,11.9,26.66,15.53,52.28,32.66,77.51,50.42,0,0-1.47-.55-1.47-.55,45.35,4.8,90.22,13.62,133.97,26.51,3.08,1.29,5.73,3,7.22,6.03.24.53.38,1.26.32,2.03-.07,1-.9,1.76-1.89,1.75.02,0-9.92-.1-9.92-.1,0-.03-.08.05-.08.1,0,.02-.01.02.02.07,0,0,.86.93.86.93,0,0,3.53,3.81,3.53,3.81l7.05,7.64.44.48c1.83,2.2,5.02,2.35,7.61,1.66.75-.17,1.5.29,1.67,1.04.08.47.12.9.15,1.34.07,1.3.12,2.45-.22,3.81,0,0-.91-1.62-.91-1.62,2.03.8,3.85,1.48,5.28,3.39.6.95.75,2.13.88,3.2.3,4.84.21,10.08-3.14,14.02,0,0,.3-.71.3-.71-.54,6.94-2.12,13.89-5.45,20.03.06,1.04.47,2.2.62,3.31,0,0-.06-.18-.06-.18.26.56.27,1.08.25,1.54-.65,4.62-3.26,8.71-5.85,12.49-.53.64-1,1.4-1.95,1.8-.81.32-1.62.53-2.42.73-6.45,1.44-12.98,2.2-19.52,3,3.25-.5,6.49-1.05,9.72-1.64,3.23-.6,6.46-1.23,9.61-2.09.78-.23,1.55-.47,2.27-.78.61-.24,1.07-.94,1.54-1.58,2.19-3.33,4.17-7,5.11-10.88.14-.84.23-1.61-.06-2.13-.21-1.01-.44-1.93-.7-2.99-.23-.64.13-1.44.44-1.93,1.97-4.01,3.07-8.44,3.79-12.84.31-1.97.52-3.99.59-5.93,0-.26.11-.49.27-.66,1.03-1.11,1.62-2.77,1.97-4.47.56-3.1.67-6.51-.15-9.57-.28-.67-1.01-1.15-1.85-1.6-1.08-.77-3.51-.72-3.21-2.53.13-.55.15-1.23.13-1.92-.01-.66-.11-1.4-.21-2.04,0,0,1.74,1.14,1.74,1.14-3.96,1.16-8.2.5-10.96-2.75,0,0-7.27-7.43-7.27-7.43,0,0-3.63-3.72-3.63-3.72-.91-.92-1.87-1.84-1.91-3.23-.23-2.09,1.7-4.09,3.82-4,0,0,.65,0,.65,0,0,0,1.3-.01,1.3-.01l2.6-.03,5.2-.05s-1.93,1.75-1.93,1.75c-.75-1.72-3.29-3.19-5.01-3.84-2.73-.76-5.74-1.54-8.64-2.3-29.21-7.52-58.83-13.5-88.7-17.68-11.95-1.66-23.92-3.1-35.92-4.26-.55-.05-1.05-.25-1.47-.55-26.72-18.49-54.13-36.26-82.34-52.39-5.73-3.11-11.7-6.53-17.53-9.38-5.85-2.59-11.79-4.27-18.28-4.49-72.53-5.82-145.64-4.23-217.87,4.52,0,0-1.27.15-1.27.15.16-.03.27-.17.27-.33,0-.08,0,.14,0,.24,0,0,0,.36,0,.36,0,0-.04,5.76-.04,5.76,0,1.14-.66,2.14-1.61,2.62-13.85,7.06-27.92,14.2-41.09,22.39-13.2,8.33-25.3,18.33-37.94,27.55-3.19,3.42-10.16,9.47-13.01,14.66,0,0-2.33-2.85-2.33-2.85,2.73-.76,5.71-1.79,8.57-1.88,3.65.01,7.21.32,10.77.59,0,0,.59.05.59.05.08,0,.22.02.38.04,2.04.22,3.75,1.91,4.09,3.9.23,1.2-.06,2.54-.77,3.52-.2.29-.28.38-.42.55,0,0-.37.46-.37.46l-.73.92s-5.9,7.37-5.9,7.37c-3.83,4.61-7.4,9.45-11.63,13.72-1.88,1.64-4.84.59-6.75.18,0,0-.01,0-.01,0,.04,0,.09-.01.13-.03,0,0,.03-.02.03-.02,0,0,.01-.01.01-.01,0,0,.07-.04.07-.04.1-.05.19-.13.26-.22.09-.13.05-.06.07-.1,0-.01.02-.03.02-.05-.18.97-.28,2.27-.28,3.35-.07,3.1,0,6.24.1,9.36.02.56-.42,1.04-.99,1.06-10.94.5-7,13.42-3.93,19.97.42,7.86,3.28,15.67,8.55,21.63.07.08.07.2,0,.28-.57.69-1.06,1.48-1.33,2.34-.36,2.22-.03,4.64.6,6.8.13.3.23.69.52.87.12-.02.07-.2.05-.29h0Z"
            />
            <path
              className="cls-1"
              d="m203.41,63.25c-6.44.75-13.39,1.39-18.97,4.84-1.86,1.27-3.73,2.45-5.56,3.68-11.92,8.21-26.24,18.42-29.05,33.35-2.22,11,3.63,13.59,13.06,16.3,10.66,1.25,21.48,1.23,32.24,1.79,74.28,2.38,172.1,6.26,246.38,8.27,0,0,.18,0,.18,0-.09,0-.35.1-.43.2,4.37-2.6-4.66-10.65-6.85-12.74-6.56-5.84-13.85-10.97-21.22-15.76,0,0,.89-.82.89-.82,2.06,4.69,3.99,9.42,5.41,14.35.39,1.62,1.01,3.37.59,5.03.32-1.67-.43-3.35-.9-4.93-1.72-4.78-3.97-9.36-6.23-13.9-.29-.55.38-1.15.89-.82,8.34,4.96,30.78,17.86,31.81,27.55.13,1.84-.92,3.78-2.47,4.74-.4.28-.94.4-1.39.42-18.27.65-42.02-.04-60.53-.14-53.27-.93-106.53-2.44-159.76-4.91-18.87-.99-37.75-1.68-56.64-3.56-1.23-.16-2.47-.28-3.7-.69-11.1-3.31-17.86-8.32-14.85-21.13,3.62-16.04,18.64-25.98,31.71-33.98,1.91-1.14,3.86-2.23,5.73-3.36,5.97-3.32,13.04-3.44,19.66-3.8h0Z"
            />
            <path
              className="cls-1"
              d="m122.05,117.9c-.1,12.14-16.02,17.94-25.09,10.54-6.96-5.3-6.97-15.79,0-21.09,9.07-7.41,25-1.59,25.1,10.55h0Zm0,0c-.23-11.63-15.39-15.61-22.98-8.08-4.76,4.33-4.77,11.84,0,16.17,7.59,7.54,22.76,3.54,22.98-8.09h0Z"
            />
          </g>
        </svg>
      )}
      {name === '5 Portes' && (
        <svg
          id="Break"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="39 80 610 200"
        >
          <defs>
            <style>{`.cls-1{fill: #${color};}`}</style>
          </defs>
          <g>
            <path
              className="cls-1"
              d="m605.45,259.27c5.71-.97,11.38-2.13,16.96-3.63,2.78-.76,5.55-1.6,8.18-2.71,1.3-.56,2.6-1.19,3.65-2.02.52-.4.99-.89,1.12-1.37-.05-4.15-1.56-8.99.38-13.03,3.57-6.81,9.21-13.16,11.13-20.6.39-2.52-.87-5.01-2.45-6.92-1.07-1.18-2.2-2.29-3.63-2.75-.67-.19-1.08-.65-1.38-1.2-.34-.54-.95-.76-1.61-.66-2.81.36-5.08.92-8.05.41-.92-.16-1.92-.67-2.6-1.39,0,0-1.59-1.49-1.59-1.49-1.79-1.64-7.61-7.14-9.54-8.92-.96-.97-1.85-1.52-2.63-2.71-1.53-2.35.26-5.41,2.57-6.17,3.43-.96,7.1-.81,10.46-.8,2.29.09,4.57.15,6.88.54,0,0,2.12.47,2.12.47,0,0-2.29,3.16-2.29,3.16-1.8-2.53-4.36-4.57-7.37-5.41-41.12-11.64-83.51-18.17-125.85-23.53-23.34-12.79-46.16-26.91-69.48-39.84-11.3-6.32-22.59-13.05-34.24-18.66-.52-.25-.69-.29-1.02-.42-.94-.12-1.72-.3-2.75-.4-10.72-1.34-23.23-1.96-34.08-2.53-52.28-2.21-104.79-.21-156.79,5.76,0,0,.7-.16.7-.16-6.8,2.29-13.58,5.55-20.23,8.92-13.36,6.8-26.39,14.38-39.23,22.15-6.43,3.91-12.87,7.84-19.19,11.88l.39-.3c-3.2,2.63-6.4,4.61-10.6,5.38-17.34.9-34.91,1.72-52.18,3.26,0,0-.55.07-.55.07,0,0-.27.03-.27.03,0,0-.14.02-.14.02,0,0-.07,0-.07,0,0,0,.04,0,.04,0,.06,0,.14-.04.18-.07-2.45,3.74-3.4,10.22-4.16,15.05,0,0-2.65-2.66-2.65-2.66,3.86-.18,17.98-2.1,18.2,4.03-.01,3.02-1,5.91-1.78,8.67-1.24,4.03-2.65,7.95-4.44,11.85-.71,1.6-1.5,3.1-2.75,4.53-.48.47-1,.83-1.69.97-2.53.32-4.93.19-7.37.07,0,0,1.95-1.99,1.95-1.99,0,0,.6,9.36.6,9.36.07.76-.39,1.45-1.05,1.72-2.07.89-4.28,1.83-6.02,3.24-.08.08-.19.17-.21.21-.02.03-.04.05-.07.07.01,0,.03-.03.03-.05,0,2.43.22,5.2.6,7.69.77,5.24,1.67,11.26,4.22,15.79,0,0-.31-.31-.31-.31,2.07,1.69,7.01,4.87,5.25,8.13-.5.9-1.09,1.4-1.51,1.92-.44.51-.68.93-.7,1.31,1.25,8.67,44,13.5,52.74,14.95-12.16-1.46-47.1-3.85-53.87-12.35-.5-.7-.97-1.56-.98-2.66.02-1.11.63-2.02,1.12-2.63.55-.79,1.32-1.3,1.3-2.02-.84-1.89-3.12-3.34-4.79-4.58-1.16-1.28-1.75-2.98-2.34-4.43-1.93-5.5-2.96-11.22-3.68-16.98-.14-1.77-.5-3.09-.05-4.96.07-.18.16-.37.25-.54,0,0,.26-.35.26-.35,2.01-2.24,4.81-3.36,7.44-4.64,0,0-1.05,1.72-1.05,1.72,0,0-.86-9.35-.86-9.35-.1-1.08.78-2.03,1.87-2,1.99.07,4.09.07,5.97-.11.21-.02.5-.06.62-.08-.23,0-.48.19-.44.15-.01,0-.03.02-.03.03,0,0,.04-.06.04-.06,2.89-4.39,4.29-9.8,5.88-14.84.51-2.31,1.47-5.11,1.45-7.12.07.22.13.33.25.47.07.04-.23-.12-.56-.2-4.09-.84-8.74-.3-12.94.11-1.5.2-2.86-1.15-2.65-2.66.76-5.44,1.38-10.7,3.72-15.84.7-1.57,2.12-3.3,4.02-3.68,0,0,.09-.01.09-.01,0,0,.18-.03.18-.03l.37-.06c.41-.06,1-.15,1.39-.18,13.79-1.41,27.39-2.38,41.18-3.34,0,0,5.17-.32,5.17-.32,1.15-.07,2.75-.12,3.88-.17,2.29-.13,4.68-1.41,6.64-2.78,13.08-9.34,26.98-17.38,40.77-25.6,13.39-7.62,26.43-15.24,41.1-20.57,39.44-5.16,79.35-7.18,119.12-7.33,16.37,0,33.09.5,49.47,1.48,9.03.74,19.21,1.15,28.13,2.66,3.99,1.18,7.85,3.66,11.49,5.48,8.7,4.72,17.29,9.61,25.85,14.54,20.89,12.32,50.6,29.14,66.69,39.66,40.42,5.57,80.8,12.46,120.03,23.86,0,0,4.2,1.27,4.2,1.27,0,0,2.11.65,2.11.65.69.21,1.64.57,2.32.92,3.02,1.49,5.53,3.74,7.36,6.57.61.99.31,2.29-.68,2.9-.5.31-1.08.38-1.61.26l-2.11-.51c-4.61-.64-9.82-.93-14.35-.36,0,0-.47.08-.47.08-.23.05-.47.13-.63.27-.21.16-.29.35-.29.39,0,.03,0,.05.02.11,3.79,3.85,4.83,4.79,8.07,8.02,0,0,3.08,3.04,3.08,3.04,0,0,1.54,1.52,1.54,1.52,0,0,.38.38.38.38,1.28.7,2.9.48,4.56.4.69-.06,1.38-.14,2.1-.23,0,0,1.13-.13,1.13-.13,1.7-.3,3.9.87,4.5,2.35-.06-.1-.2-.22-.37-.26,4.06,1.59,7.17,5.9,7.77,10.28.38,3.99-2.06,7.68-3.85,10.79-2.68,4.65-6.28,8.76-8.66,13.53-1.05,3.3-.4,6.92-.19,10.5,1.36,6.67-26.23,9.87-31.23,10.66h0Z"
            />
            <path
              className="cls-1"
              d="m446.7,151.14c.15-2.62-.65-5.18-1.51-7.62-.9-2.44-2.01-4.82-3.21-7.1-.32-.5.4-1.09.83-.74,9.54,6.31,19.51,12.23,28.04,19.95,0,0,1.16,1.08,1.16,1.08.33.3.91.87,1.27,1.45,2.55,3.81-.55,9.45-5.15,9.36,0,0-3.17,0-3.17,0-45.91-.11-103.11-1.17-149.28-2.25-34.41-1.21-78.19-1.61-112.18-3.93-8.11-.93-23.94-4.43-17.67-15.96,6.15-11.38,16.35-19.48,25.99-27.55,3.24-2.62,6.56-5.14,9.92-7.59,3.37-2.45,6.76-4.87,10.25-7.17,3.63-1.42,7.44-3,11.41-2.95-3.84.16-7.83,2.25-10.93,3.68-6.57,5.04-12.93,10.36-19.11,15.85-6.15,5.5-12.09,11.27-17.3,17.52-2.98,3.73-5.82,7.47-7.24,11.86-.73,2.58,1.31,3.82,3.8,4.95,3.42,1.41,7.45,2.04,11.43,2.45,20.58.98,41.31.6,61.93,1.17,44.35.82,104.99,2.48,149.31,4.13,17.6.67,35.21,1.37,52.8,2.19,2.02.13,3.45-2.33,2.43-4.06-.23-.47-1.13-1.29-1.8-2.01-8.04-8-17.54-14.33-26.56-21.2,0,0,.83-.74.83-.74,2.03,4.8,4.16,9.95,3.7,15.24h0Z"
            />
          </g>
          <path
            className="cls-1"
            d="m174.1,147.93c-.1,12.14-16.02,17.94-25.09,10.54-6.96-5.3-6.97-15.79,0-21.09,9.07-7.41,25-1.59,25.1,10.55h0Zm0,0c-.23-11.63-15.39-15.61-22.98-8.08-4.76,4.33-4.77,11.84,0,16.17,7.59,7.54,22.76,3.54,22.98-8.09h0Z"
          />
        </svg>
      )}
      {name === 'Cabriolet' && (
        <svg
          id="Break"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="39 80 610 200"
        >
          <defs>
            <style>{`.cls-1{fill: #${color};}`}</style>
          </defs>
          <path
            className="cls-1"
            d="m588.71,258.42c14.29-.89,28.63-1.74,42.79-3.74,2-.34,4.02-.61,5.86-1.39.2-.12.31-.22.48-.42,1.47-1.59,2.17-3.93,2.01-6,0,0,.36.59.36.59,0,0-8.27-5.28-8.27-5.28-.32-.21-.47-.58-.41-.93,0,0,2.36-15.26,2.36-15.26.07-.51.5-.87.98-.92,3.24-.5,6.75-2.33,6.87-5.89,0,0,.12-.88.12-.88.3-2.71.94-5.82.5-8.34-.36-2.02-1.24-2.99-3.32-2.94-.71,0-1.3-.49-1.45-1.16,0,0-.63-2.98-.63-2.98,0,0,1.53,1.19,1.53,1.19-8.29.46-16.51,1.14-24.85.65-.59-.09-1.08-.1-1.63-.27-1.65-.38-2.89-1.75-4.06-2.74-3.39-3.16-6.51-6.57-9.56-10.03,0,0-1.81-2.1-1.81-2.1-.43-.54-.67-.7-1.08-1.48-1.19-2.21.44-5.13,2.89-5.41.56-.06.7-.04.94-.04l2.75-.03c10.28-.29,21.09.61,30.27,5.74.43.24.86.5,1.29.77l.64.43c.23.16.4.29.71.54l-3.58,2.74c-1.79-3.27-4.27-6.39-7.29-8.63,0,0,.74.38.74.38-47.8-14.34-97.1-23.69-146.8-28.09-23.18-13.17-67.35-41.63-90.22-55.49,0,0,2.25.49,2.25.49,0,0-21.5,2.71-21.5,2.71,0,0,2.79-4.73,2.79-4.73,0,0,23.93,59.41,23.93,59.41.97,2.27-.86,4.9-3.31,4.82,0,0-74.65-1.29-74.65-1.29-1.44-.02-2.65-.93-3.14-2.19-1.23-2.99-2.51-6.43-4.52-8.92.22.12.48.4,1.57.33-4.37-.1-9.12.88-13.4,2.32-1.95.48-3.89,1.83-5.77,1.85-25.42-1.91-76.76-5.41-101.72-7.62-9.14-1.87-18.42-1.27-27.63.26-5.54.8-17.28,2.58-22.78,3.38-20.14,3.24-40.82,3.87-60.86,7.46-5.77,1-11.47,2.32-17.12,3.84,0,0-.23.06-.23.06,0,0-.16.04-.09.03.06-.04,0,0-.1.07-.2.17-.49.56-.74,1-.26.44-.5.95-.72,1.48-.88,2.13-1.52,4.6-1.98,6.95l-3.46-1.73c.57-.58,1.06-.97,1.71-1.39,1.31-.92,3.61-1.37,5.07-.05,2.43,1.49,5.04,2.7,7.56,4.2,2.52,1.57,5.51,3.11,7.35,5.83.43.61.64,1.6.66,2.41.58,3.92,1.04,9.32-4.02,10.61-7.09,1.08-13.95.16-21-.17,0,0,1.55-1.21,1.55-1.21-.71,4.33-1.23,9.24-.2,13.48.21.7-.2,1.45-.91,1.64-1.66.18-3.44.34-5.01.8-.72.19-1.49.52-1.76.8-.02.03-.06.05-.08.07.01.01.01,0,0,0-.03.02-.02.2-.05.29.45,10.28,4.27,20.65,9.92,29.22,1.18,1.22,1.74,3.93.86,5.76-.21.62-.61,1.22-.73,1.59-.29.88-.03,1.92.65,2.57.83.72,1.97,1.03,2.96,1.47,13.4,4.96,27.57,7.69,41.73,9.54-14.26-1.43-28.58-3.62-42.19-8.32-1.19-.46-2.47-.84-3.44-1.67-1.08-.98-1.53-2.59-1.1-4,.09-.33.3-.74.4-.94.89-1.64.87-3.66-.46-5.04-4.05-5.64-6.92-12.03-8.89-18.66-1.07-3.76-2.04-7.64-2.09-11.67.01-1.98,2.13-3,3.57-3.4,1.79-.53,3.49-.8,5.29-.98,0,0-1.16,1.68-1.16,1.68-1.07-3.77-.89-7.36-.63-11.1.11-1.22.23-2.4.43-3.64.12-.76.8-1.28,1.55-1.21,6.5.18,13.47.81,19.87-.19.82-.25,1.21-.6,1.47-1.14.57-1.76.04-4.23-.16-6.29,0-.06-.01-.24-.03-.18,0,0-.04-.09-.11-.2-.16-.25-.47-.59-.81-.9-3.73-3.28-9.51-5.4-13.47-7.95.07.07.19.05.18.06.01-.01-.3.08-.61.3-.31.2-.71.54-.94.79-.76.81-2.04.84-2.85.08-.51-.48-.71-1.18-.6-1.83.49-2.67,1.09-5.2,2.1-7.82.81-1.94,1.77-4.08,3.99-4.99,25.64-7.9,52.68-8.27,78.91-12.72,5.46-.85,17.55-2.85,22.72-3.65,7.74-1.36,15.71-2.19,23.65-1.42,2.45.16,5.1.88,7.57,1,4.33.34,33.12,2.33,38.23,2.66,0,0,61.25,3.99,61.25,3.99l-1.61.29c6.73-2.86,15.65-5.24,21.34-4.28,1.64.51,2.89,2.05,3.74,3.32,1.96,3.04,3.25,6.09,4.57,9.41,0,0-3.14-2.21-3.14-2.21,0,0,74.65,1.1,74.65,1.1l-3.31,4.82s-23.85-59.44-23.85-59.44c-.72-1.78.14-3.8,1.92-4.51.28-.11.58-.19.86-.22,0,0,21.5-2.66,21.5-2.66.81-.1,1.6.09,2.25.49,22.06,13.8,66.55,41.57,88.55,55.46,0,0-1.4-.47-1.4-.47,12.52,1.2,25.02,2.7,37.46,4.54,37.32,5.49,74.18,14.03,110.17,25.3,3.17,1.82,5.5,4.92,7.56,7.88,1.18,1.85,3.3,4.55.69,6.06-.86.43-1.87.27-2.55-.34-.05-.04-.24-.19-.38-.29,0,0-.48-.34-.48-.34-5.44-3.44-11.92-5.16-18.28-5.91-4.31-.34-9.06-.37-13.48-.4-.67,0-.35,0-.35-.03.05-.04.07-.06.06-.09.02-.02,0-.09-.02-.13,2.83,3.61,6.29,7.41,9.5,10.79,1.23,1.19,2.45,2.54,3.77,3.5.17.14.26.17.35.23.08.08.22.05.32.1.06.01.09.04.18.05,0,0,.29.04.29.04,1.01.16,2.11.23,3.18.28,7.16.27,14.51,0,21.7-.28.74-.05,1.4.47,1.53,1.19,0,0,.56,2.99.56,2.99,0,0-1.45-1.16-1.45-1.16,8.31.06,6.14,10.01,5.23,15.4-.42,4.63-4.82,7.31-9.11,7.75,0,0,.98-.92.98-.92l-2.72,15.2s-.41-.93-.41-.93c.01.02,8.17,5.48,8.19,5.5.2.13.31.34.32.56.18,2.68-.77,5.24-2.56,7.18-.47.54-1.17.89-1.84,1.07-1.76.53-3.59.78-5.39,1.03-14.27,1.7-28.64,2-42.98,2.46h0Z"
          />
          <path
            className="cls-1"
            d="m308.92,146.14c4.39-2.64,6.38-7.46,5.51-12.31-.78-4.74-2.44-10.62-8.14-10.24-11.03.55-17.71,11.12-14.39,21.55-5.24-7.32-2.29-18.67,5.6-22.99,4.07-2.22,9.07-3.65,13.56-1.64,4.91,2.3,6.21,8.35,6.37,13.03.4,5.61-2.96,11.3-8.51,12.6h0Z"
          />
          <path
            className="cls-1"
            d="m212.85,145.14c1.71-1.31,3.62-3.08,3.99-5.18.2-2.8-1.07-6.44-3.11-8.41-.68-.59-1.33-.93-2.14-1.01-2.14-.26-4.44-.23-6.63-.04-5.58.5-11.14,2.04-15.98,4.93-3.79,2.22-4.33,4.14-.06,6.38-1.79-.19-4.31-1.05-4.56-3.27-.22-2.49,2.07-4.38,3.78-5.86,4.72-3.65,10.57-5.69,16.48-6.2,3.79-.16,8.85-.61,11.63,2.57,2.66,3.16,3.59,7.57,2.47,11.48-1.11,2.51-3.45,3.86-5.87,4.6h0Z"
          />
          <path
            className="cls-1"
            d="m430.6,160.03c-.43-5.6-.68-11.82-.9-17.46-.07-1.94-.15-3.88-.19-5.82-.01-.6.46-1.1,1.06-1.11.27,0,.51.09.71.24,2.75,2.05,5.44,4.14,8.05,6.36,5.21,4.63,10.85,9.04,14.15,15.38,2.57,5.54-4.21,6.38-7.96,6.94-13.73,1.32-27.3.23-40.89-1.41,4.49-.21,48.64.46,46.27-3.88-1.23-2.99-3.8-5.64-6.06-8.05-4.66-4.79-9.76-9.27-14.91-13.6l1.77-.87c-.23,7.65-.55,15.65-1.1,23.28h0Z"
          />
        </svg>
      )}
    </div>
  );
};
