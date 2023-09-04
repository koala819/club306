'use client';
import React, { useEffect, useState, useRef } from 'react';
import { PhotoshopPicker } from 'react-color';
import { getAllColors } from '@/lib/supabase';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { Color } from '@/app/models';
import { recordModifyColorInCpanel } from '@/lib/supabase';

export default function Colors() {
  const [colors, setColors] = useState<Color[]>([]);
  const [color, setColor] = useState<string>('');
  const [displayPicker, setDisplayPicker] = useState(false);
  const [initialColor, setInitialColor] = useState('');
  const colorPickerRef = useRef<HTMLDivElement | null>(null);

  const handleColorChange = (newColor: { hex: string }) => {
    setColor(newColor.hex);
  };
  const handleColorOk = async () => {
    const response = await recordModifyColorInCpanel(initialColor, color);
    if (response !== undefined && response.status === 200) {
      setDisplayPicker(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const carColor = await getAllColors();
      if (carColor !== null && carColor.data !== null) {
        const fetchedColors: Color[] = carColor.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
            hexa: color.hexa,
          };
        });
        setColors(fetchedColors);
      }
    };
    fetchData();
  }, []);

  const sortedColors = colors
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(e.target as Node)
    ) {
      setDisplayPicker(false);
    }
  };

  useEffect(() => {
    if (displayPicker) {
      window.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [displayPicker]);

  return (
    <RootLayout hideFooter hideNavbar>
      <CustomLayout>
        {displayPicker && (
          <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-[1000]">
            <div
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              ref={colorPickerRef}
            >
              <h2 className="text-lg font-semibold mb-2">
                Palette de couleurs
              </h2>
              <PhotoshopPicker
                color={color}
                onChange={handleColorChange}
                onAccept={handleColorOk}
                onCancel={() => setDisplayPicker(false)}
              />
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedColors.map((colorItem) => (
            <div
              key={colorItem.id}
              className="bg-white rounded-md shadow-md p-4 text-center cursor-pointer"
              onClick={() => {
                setDisplayPicker(true);
                setColor(`#${colorItem.hexa}`);
                setInitialColor(colorItem.hexa);
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-2"
                style={{ backgroundColor: `#${colorItem.hexa}` }}
              ></div>
              <p className="text-gray-700">{colorItem.name}</p>
            </div>
          ))}
        </div>
      </CustomLayout>
    </RootLayout>
  );
}
