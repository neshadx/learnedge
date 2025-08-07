

// "use client";

// import Link from "next/link";
// import  Button  from "@/components/ui/Button";

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-br from-green-100 via-white to-white py-24 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
//         {/* Left content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Learn Smarter with <span className="text-green-600">LearnEdge</span>
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg">
//             Explore interactive courses, expert mentors, and a platform built for future-ready learning.
//           </p>

//           <div className="mt-6 flex justify-center md:justify-start">
//             <Link href="/dashboard">
//               <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right image / illustration */}
//         <div className="md:w-1/2">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
//             alt="Hero Illustration"
//             className="w-full max-w-sm mx-auto drop-shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";

import Link from "next/link";
import Button from "@/components/ui/Button"; // ✅ fixed: default import

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 via-white to-white py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Learn Smarter with <span className="text-green-600">LearnEdge</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore interactive courses, expert mentors, and a platform built for future-ready learning.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link href="/dashboard">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Right image / illustration */}
        <div className="md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Hero Illustration"
            className="w-full max-w-sm mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

