// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Failed to fetch courses", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

//       {courses.length === 0 ? (
//         <p>No courses found.</p>
//       ) : (
//         <div className="grid gap-4">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded-md p-4 shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{course.title}</h2>
//                 <p className="text-sm text-gray-500">
//                   Instructor: {course.instructor}
//                 </p>
//                 <p className="text-sm text-gray-500">Price: ${course.price}</p>
//               </div>

//               <Link
//                 href={`/courses/${course._id}`}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//               >
//                 View
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoursesPage;


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Failed to fetch courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
//         🎓 Available Courses
//       </h1>

//       {courses.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">No courses found.</p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold text-green-700 mb-2">
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-1">
//                   Instructor: <span className="font-medium">{course.instructor}</span>
//                 </p>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Price: <span className="font-medium">${course.price}</span>
//                 </p>
//               </div>

//               <Link
//                 href={`/courses/${course._id}`}
//                 className="mt-auto inline-block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 View Course
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoursesPage;



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        🎓 Available Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No courses found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Price: <span className="font-medium">${course.price}</span>
                </p>
              </div>

              <Link
                href={`/courses/${course._id}`}
                className="mt-auto inline-block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default CoursesPage;


