"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const CourseForm = ({ initialData = {}, isEdit = false }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    instructor: initialData.instructor || "",
    image: initialData.image || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isEdit
      ? `/api/courses/${initialData._id}`
      : "/api/courses";

    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/dashboard/courses");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">
        {isEdit ? "Edit Course" : "Create New Course"}
      </h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Course Title"
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 mb-3 rounded"
        rows={3}
        required
      />

      <input
        type="text"
        name="instructor"
        value={formData.instructor}
        onChange={handleChange}
        placeholder="Instructor Name"
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Course Image URL"
        className="w-full border p-2 mb-4 rounded"
        required
      />

      <Button type="submit" className="bg-green-600 text-white px-4 py-2">
        {isEdit ? "Update" : "Create"}
      </Button>
    </form>
  );
};

export default CourseForm;
