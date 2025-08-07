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
//         console.error("Failed to fetch courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">All Courses</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border">Image</th>
//               <th className="p-2 border">Title</th>
//               <th className="p-2 border">Price</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course._id}>
//                 <td className="p-2 border">
//                   <img src={course.image} alt={course.title} className="w-20 h-14 object-cover rounded" />
//                 </td>
//                 <td className="p-2 border">{course.title}</td>
//                 <td className="p-2 border">${course.price}</td>
//                 <td className="p-2 border">
//                   <Link
//                     href={`/dashboard/courses/${course._id}/edit`}
//                     className="text-green-600 hover:underline"
//                   >
//                     Edit
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CoursesPage;


// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetch("/api/courses")
//       .then((res) => res.json())
//       .then((data) => setCourses(data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Courses</h2>
//       <Link href="/dashboard/courses/new">
//         <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">Add New Course</button>
//       </Link>
//       <ul className="space-y-2">
//         {courses.map((course) => (
//           <li key={course.id} className="p-4 border rounded">
//             <p><strong>{course.title}</strong></p>
//             <p>{course.description}</p>
//             <Link href={`/dashboard/courses/${course.id}/edit`}>
//               <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CoursesPage;



"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await fetch(`/api/courses/${id}`, { method: "DELETE" });
      fetchCourses(); // refresh list
    } catch (err) {
      console.error("Failed to delete course", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <div className="p-6">Loading courses...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Courses</h1>
        <Link
          href="/dashboard/courses/new"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + New Course
        </Link>
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-t">
              <td className="p-2">{course.title}</td>
              <td className="p-2">${course.price}</td>
              <td className="p-2 flex gap-2">
                <Link
                  href={`/dashboard/courses/${course._id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;


