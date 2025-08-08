// src/app/dashboard/profile/page.jsx
"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Loading...</div>;
  }

  const { user } = session;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <Image
          src={user?.image || "/default-avatar.png"}
          alt="Profile"
          width={60}
          height={60}
          className="rounded-full border"
        />
        <div>
          <p className="text-lg font-medium text-gray-700">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Optional: Add editable form later */}
      <p className="text-gray-600">
        This is your profile information from Google. Editing profile details will be available soon.
      </p>
    </div>
  );
};

export default ProfilePage;
