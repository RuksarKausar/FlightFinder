import React, { useState } from 'react';
import API from '../api';

export default function AddFlight() {
  const [form, setForm] = useState({ airline: '', from: '', to: '', date: '', returnDate: '', price: '', classType: '', duration: '', seatsAvailable: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/flights/add', form);
    alert('Flight added');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add New Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {Object.keys(form).map(field => (
          <input
            key={field}
            placeholder={field}
            className="w-full p-2 border"
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add Flight</button>
      </form>
    </div>
  );
}
