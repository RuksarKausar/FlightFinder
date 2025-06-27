import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      <Link to="/admin/add-flight" className="block bg-blue-600 text-white p-2 rounded">Add Flight</Link>
      <Link to="/admin/update-flight/flight-id" className="block bg-yellow-500 text-white p-2 rounded">Update Flight</Link>
    </div>
  );
}