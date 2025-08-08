"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import Image from "next/image";

const Topbar = () => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-white shadow-sm">
      <div className="text-lg font-semibold text-gray-700">Welcome to LearnEdge Dashboard</div>

      <div className="flex items-center gap-4">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full border"
          />
        )}
        <div className="text-sm text-gray-600">{session?.user?.email}</div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
