"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, User, LayoutDashboard } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Courses", href: "/dashboard/courses", icon: <Book size={18} /> },
  { label: "My Bookings", href: "/dashboard/my-bookings", icon: <Home size={18} /> },
  { label: "Profile", href: "/dashboard/profile", icon: <User size={18} /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="p-4 font-bold text-xl text-primary border-b">LearnEdge</div>
      <nav className="flex flex-col p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all 
                ${isActive ? "bg-primary text-white" : "hover:bg-gray-100 text-gray-700"}`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
