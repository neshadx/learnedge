

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch("/api/courses");
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       console.error("Failed to fetch courses", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete?");
//     if (!confirm) return;

//     try {
//       await fetch(`/api/courses/${id}`, { method: "DELETE" });
//       fetchCourses(); // refresh list
//     } catch (err) {
//       console.error("Failed to delete course", err);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   if (loading) return <div className="p-6">Loading courses...</div>;

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-semibold">Manage Courses</h1>
//         <Link
//           href="/dashboard/courses/new"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           + New Course
//         </Link>
//       </div>

//       <table className="w-full border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 text-left">Title</th>
//             <th className="p-2 text-left">Price</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course._id} className="border-t">
//               <td className="p-2">{course.title}</td>
//               <td className="p-2">${course.price}</td>
//               <td className="p-2 flex gap-2">
//                 <Link
//                   href={`/dashboard/courses/${course._id}/edit`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(course._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
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
    const confirm = window.confirm("Are you sure you want to delete this course?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      // Refresh list
      fetchCourses();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete course");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <div className="p-6 text-gray-500">Loading courses...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
        <Link
          href="/dashboard/courses/new"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
        >
          + New Course
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="text-gray-500">No courses found.</div>
      ) : (
        <div className="overflow-x-auto border rounded-md">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Instructor</th>
                <th className="p-3">Price</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{course.title}</td>
                  <td className="p-3">{course.instructor || "—"}</td>
                  <td className="p-3">${course.price}</td>
                  <td className="p-3 flex gap-4">
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
      )}
    </div>
  );
};

export default CoursesPage;



