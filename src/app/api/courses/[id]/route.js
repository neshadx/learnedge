import { NextResponse } from "next/server";

let courses = [];

export async function GET(req, { params }) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const index = courses.findIndex((c) => c.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  courses[index] = { ...courses[index], ...body };
  return NextResponse.json({ message: "Course updated", course: courses[index] });
}
