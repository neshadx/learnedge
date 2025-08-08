// src/app/dashboard/page.jsx
"use client";

import React from "react";

const DashboardHome = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">
        Use the sidebar to navigate through your courses, bookings, and profile settings.
      </p>

      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Example static cards (replace later with dynamic stats if needed) */}
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700">Total Courses</h3>
          <p className="mt-2 text-2xl font-bold text-primary">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700">My Bookings</h3>
          <p className="mt-2 text-2xl font-bold text-primary">5</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700">Profile Completed</h3>
          <p className="mt-2 text-2xl font-bold text-primary">80%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
