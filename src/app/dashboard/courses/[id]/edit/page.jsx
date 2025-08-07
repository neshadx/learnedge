// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import CourseForm from "@/components/forms/CourseForm";

// const EditCoursePage = () => {
//   const { id } = useParams();
//   const [initialData, setInitialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await fetch(`/api/courses/${id}`);
//         const data = await res.json();
//         setInitialData(data);
//       } catch (error) {
//         console.error("Failed to load course data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchCourse();
//   }, [id]);

//   if (loading) return <div className="p-6">Loading...</div>;
//   if (!initialData) return <div className="p-6 text-red-500">Course not found.</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Edit Course</h1>
//       <CourseForm initialData={initialData} isEdit={true} />
//     </div>
//   );
// };

// export default EditCoursePage;



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CourseForm from "@/components/forms/CourseForm";

const EditCoursePage = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    try {
      const res = await fetch(`/api/courses/${id}`);
      const data = await res.json();
      setCourseData(data);
    } catch (error) {
      console.error("Failed to load course", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchCourse();
  }, [id]);

  if (loading) return <div className="p-6">Loading course...</div>;

  if (!courseData) return <div className="p-6 text-red-500">Course not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Course</h1>
      <CourseForm initialData={courseData} isEdit />
    </div>
  );
};

export default EditCoursePage;

