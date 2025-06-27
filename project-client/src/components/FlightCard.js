import React from 'react';
export default function FlightCard({ flight, onBook }) {
  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="text-lg font-bold">{flight.airline}</h2>
      <p>{flight.from} → {flight.to}</p>
      <p>Date: {flight.date}</p>
      <p>Class: {flight.classType} | Price: ₹{flight.price}</p>
      <button onClick={() => onBook(flight)} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
        Book Flight
      </button>
    </div>
  );
}