

// "use client";

// import Link from "next/link";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useState } from "react";
// import Button from "@/components/ui/Button";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-green-600">
//           Learn<span className="text-gray-800">Edge</span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-gray-700 hover:text-green-600 font-medium transition"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {!session ? (
//             <Button onClick={() => signIn()} className="ml-4">
//               Login
//             </Button>
//           ) : (
//             <>
//               <Link href="/dashboard">
//                 <Button className="ml-4">Dashboard</Button>
//               </Link>
//               <Button onClick={() => signOut()} className="ml-2" variant="outline">
//                 Logout
//               </Button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {open && (
//         <nav className="md:hidden px-4 py-3 bg-white border-t border-gray-200 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="block text-gray-700 hover:text-green-600 font-medium"
//               onClick={() => setOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {!session ? (
//             <Button onClick={() => signIn()} className="w-full">
//               Login
//             </Button>
//           ) : (
//             <>
//               <Link href="/dashboard">
//                 <Button className="w-full mb-2" onClick={() => setOpen(false)}>
//                   Dashboard
//                 </Button>
//               </Link>
//               <Button
//                 onClick={() => {
//                   signOut();
//                   setOpen(false);
//                 }}
//                 className="w-full"
//                 variant="outline"
//               >
//                 Logout
//               </Button>
//             </>
//           )}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// "use client";

// import Link from "next/link";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useState } from "react";
// import Button from "@/components/ui/Button";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/courses", label: "Courses" }, //  Courses link added here
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-green-600">
//           Learn<span className="text-gray-800">Edge</span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-gray-700 hover:text-green-600 font-medium transition"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {!session ? (
//             <Button onClick={() => signIn()} className="ml-4">
//               Login
//             </Button>
//           ) : (
//             <>
//               <Link href="/dashboard">
//                 <Button className="ml-4">Dashboard</Button>
//               </Link>
//               <Button onClick={() => signOut()} className="ml-2" variant="outline">
//                 Logout
//               </Button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {open && (
//         <nav className="md:hidden px-4 py-3 bg-white border-t border-gray-200 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="block text-gray-700 hover:text-green-600 font-medium"
//               onClick={() => setOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {!session ? (
//             <Button onClick={() => signIn()} className="w-full">
//               Login
//             </Button>
//           ) : (
//             <>
//               <Link href="/dashboard">
//                 <Button className="w-full mb-2" onClick={() => setOpen(false)}>
//                   Dashboard
//                 </Button>
//               </Link>
//               <Button
//                 onClick={() => {
//                   signOut();
//                   setOpen(false);
//                 }}
//                 className="w-full"
//                 variant="outline"
//               >
//                 Logout
//               </Button>
//             </>
//           )}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      id="site-header" // ✅ এই id যোগ করা হলো
      className="sticky top-0 z-50 bg-white shadow-sm border-b"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          Learn<span className="text-gray-800">Edge</span>
        </Link>

        {/* Desktop Nav */}
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
            <>
              <Link href="/dashboard">
                <Button className="ml-4">Dashboard</Button>
              </Link>
              <Button
                onClick={() => signOut()}
                className="ml-2"
                variant="outline"
              >
                Logout
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
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
            <>
              <Link href="/dashboard">
                <Button
                  className="w-full mb-2"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="w-full"
                variant="outline"
              >
                Logout
              </Button>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

