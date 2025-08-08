
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Home,
//   Book,
//   User,
//   LayoutDashboard,
//   ArrowLeftCircle,
// } from "lucide-react";
// import { useState } from "react";

// const navItems = [
//   { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
//   { label: "Courses", href: "/dashboard/courses", icon: <Book size={18} /> },
//   { label: "My Bookings", href: "/dashboard/my-bookings", icon: <Home size={18} /> },
//   { label: "Profile", href: "/dashboard/profile", icon: <User size={18} /> },
// ];

// const Sidebar = () => {
//   const pathname = usePathname();
//   const [clickedPath, setClickedPath] = useState(null);

//   return (
//     <aside className="w-64 hidden md:flex flex-col bg-white border-r border-gray-200 min-h-screen shadow-sm">
//       <div className="p-4 font-bold text-xl text-primary border-b">LearnEdge</div>

//       <nav className="flex flex-col p-4 space-y-2 flex-grow">
//         {navItems.map((item) => {
//           const isActive = clickedPath === item.href;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setClickedPath(item.href)} // ✅ track last clicked
//               className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all
//                 ${
//                   isActive
//                     ? "bg-green-100 text-green-800 border-l-4 border-green-500 pl-[14px] font-medium"
//                     : "hover:bg-gray-100 text-gray-700"
//                 }`}
//             >
//               {item.icon}
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* 🔁 Go to Home */}
//       <div className="p-4 border-t mt-auto">
//         <Link
//           href="/"
//           className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition"
//         >
//           <ArrowLeftCircle size={18} />
//           Back to Home
//         </Link>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Book,
  User,
  LayoutDashboard,
  ArrowLeftCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Courses", href: "/dashboard/courses", icon: <Book size={18} /> },
  { label: "My Bookings", href: "/dashboard/my-bookings", icon: <Home size={18} /> },
  { label: "Profile", href: "/dashboard/profile", icon: <User size={18} /> },
];

const Sidebar = () => {
  const pathname = usePathname(); // ✅ This gives us the current route

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="p-4 font-bold text-xl text-primary border-b">LearnEdge</div>

      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href; // ✅ Match based on current route
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all
                ${
                  isActive
                    ? "bg-green-100 text-green-800 border-l-4 border-green-500 pl-[14px] font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* 🔁 Go to Home */}
      <div className="p-4 border-t mt-auto">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition"
        >
          <ArrowLeftCircle size={18} />
          Back to Home
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
