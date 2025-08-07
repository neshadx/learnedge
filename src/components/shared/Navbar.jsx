// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Button from "@/components/ui/Button";
// import Link from "next/link";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Courses", href: "#courses" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="w-full z-50 bg-white shadow sticky top-0">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-blue-600">LearnEdge</h1>

//         <div className="hidden md:flex space-x-6">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="text-gray-600 hover:text-blue-600 font-medium transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden md:flex">
//           <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">Login</Button>
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-3">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="block text-gray-700 hover:text-blue-600"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Login</Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// "use client";

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>Navbar</h1>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button"; // ✅ fixed here
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Learn<span className="text-gray-800">Edge</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              {link.label}
            </Link>
          ))}

          {!session ? (
            <Button onClick={() => signIn()} className="ml-4">
              Login
            </Button>
          ) : (
            <Button onClick={() => signOut()} className="ml-4" variant="outline">
              Logout
            </Button>
          )}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-4 py-3 bg-white border-t border-gray-200 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {!session ? (
            <Button onClick={() => signIn()} className="w-full">
              Login
            </Button>
          ) : (
            <Button onClick={() => signOut()} className="w-full" variant="outline">
              Logout
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
