// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await fetch(`/api/courses/${id}`);
//         const data = await res.json();
//         setCourse(data);
//       } catch (error) {
//         console.error("Failed to fetch course:", error);
//       }
//     };

//     if (id) {
//       fetchCourse();
//     }
//   }, [id]);

//   const handleBooking = async () => {
//     if (!session?.user?.email) {
//       router.push("/login");
//       return;
//     }

//     try {
//       const res = await fetch("/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           courseId: course._id,
//           userEmail: session.user.email,
//         }),
//       });

//       if (res.ok) {
//         alert("✅ Booking successful!");
//         router.push("/dashboard/my-bookings");
//       } else {
//         alert("❌ Booking failed!");
//       }
//     } catch (error) {
//       console.error("Booking error:", error);
//     }
//   };

//   if (!course) return <div className="text-center py-10">Loading...</div>;

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
//       <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
//       <p className="text-gray-600 mb-4">Price: ${course.price}</p>
//       <p className="text-gray-700 mb-6">
//         {course.description || "No description provided."}
//       </p>

//       <button
//         onClick={handleBooking}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default CourseDetailsPage;



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("Failed to fetch course:", error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleBooking = async () => {
    if (!session?.user?.email) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course._id,
          courseTitle: course.title, // ✅ Fixed: this was missing
          userEmail: session.user.email,
        }),
      });

      if (res.ok) {
        alert("✅ Booking successful!");
        router.push("/dashboard/my-bookings");
      } else {
        alert("❌ Booking failed!");
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  if (!course) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-4">Price: ${course.price}</p>
      <p className="text-gray-700 mb-6">
        {course.description || "No description provided."}
      </p>

      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default CourseDetailsPage;

