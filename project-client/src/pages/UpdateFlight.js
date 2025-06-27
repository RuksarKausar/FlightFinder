import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function UpdateFlight() {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      const res = await API.get(`/flights/${id}`);
      setForm(res.data);
    };
    fetchFlight();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/flights/${id}`, form);
    alert('Flight updated');
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Update Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {Object.keys(form).map(field => (
          <input
            key={field}
            value={form[field]}
            placeholder={field}
            className="w-full p-2 border"
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Update Flight</button>
      </form>
    </div>
  );
}
