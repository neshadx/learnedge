import { NextResponse } from "next/server";

let courses = [];

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(req) {
  const body = await req.json();
  const newCourse = { ...body, id: Date.now().toString() };
  courses.push(newCourse);
  return NextResponse.json({ message: "Course created", course: newCourse });
}
