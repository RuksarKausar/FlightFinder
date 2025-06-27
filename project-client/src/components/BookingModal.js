import React, { useState } from 'react';
export default function BookingModal({ flight, onClose, onSubmit }) {
  const [seatNumber, setSeatNumber] = useState('');

  const handleBook = () => {
    onSubmit(seatNumber);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Book Flight: {flight.airline}</h3>
        <input
          type="text"
          placeholder="Seat Number (e.g., 3A)"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <div className="flex justify-between">
          <button onClick={handleBook} className="bg-green-500 text-white px-4 py-2 rounded">Confirm</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}