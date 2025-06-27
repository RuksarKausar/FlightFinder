import React, { useEffect, useState } from 'react';
import API from '../api';
import FlightCard from '../components/FlightCard';
import BookingModal from '../components/BookingModal';

export default function UserHome() {
  const [flights, setFlights] = useState([]);
  const [query, setQuery] = useState({ from: '', to: '' });
  const [selectedFlight, setSelectedFlight] = useState(null);

  const searchFlights = async () => {
    const res = await API.get('/flights');
    const result = res.data.filter(f =>
      f.from.toLowerCase().includes(query.from.toLowerCase()) &&
      f.to.toLowerCase().includes(query.to.toLowerCase())
    );
    setFlights(result);
  };

  const handleBooking = async (seatNumber) => {
    try {
      await API.post('/bookings', {
        userId: localStorage.getItem('userId'),
        flightId: selectedFlight._id,
        seatNumber
      });
      alert('Booking successful');
      setSelectedFlight(null);
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search Flights</h2>
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="From" className="border p-2" onChange={e => setQuery({ ...query, from: e.target.value })} />
        <input type="text" placeholder="To" className="border p-2" onChange={e => setQuery({ ...query, to: e.target.value })} />
        <button onClick={searchFlights} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>
      {flights.map(flight => (
        <FlightCard key={flight._id} flight={flight} onBook={() => setSelectedFlight(flight)} />
      ))}
      {selectedFlight && (
        <BookingModal flight={selectedFlight} onClose={() => setSelectedFlight(null)} onSubmit={handleBooking} />
      )}
    </div>
  );
}