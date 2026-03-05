import React, { useState, useEffect } from 'react';

export default function HotelSwitcher({ hotels, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleSwitch = (index) => {
    setActiveIndex(index);
    // Dispatch a custom event so the vanilla Astro script can update the building
    const event = new CustomEvent('hotelChange', {
      detail: { hotel: hotels[index] }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="flex gap-2 p-4 bg-black/60 border-4 border-white pixel-border z-50 text-white relative flex-wrap justify-center">
      {hotels.map((hotel, index) => (
        <button
          key={hotel.id}
          onClick={() => handleSwitch(index)}
          className={`px-4 py-2 font-['Press_Start_2P'] text-xs uppercase hover:bg-gray-700 active:scale-95 transition-transform ${
            activeIndex === index ? 'bg-gray-600 border-2 border-yellow-400' : 'bg-gray-800 border-2 border-transparent'
          }`}
        >
          {hotel.name}
        </button>
      ))}
    </div>
  );
}
