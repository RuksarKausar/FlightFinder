import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registered successfully');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" required
          className="w-full border p-2" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required
          className="w-full border p-2" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required
          className="w-full border p-2" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}
