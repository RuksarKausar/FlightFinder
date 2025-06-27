import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      const user = res.data.user;
      if (user.role === 'admin') navigate('/admin');
      else navigate('/user');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" required
          className="w-full border p-2" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required
          className="w-full border p-2" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
