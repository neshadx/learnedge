// src/app/api/seo/[slug]/route.js
import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/** Meta conf*/
const PAGES = {
  home: {
    title: "LearnEdge — Learn Smarter",
    description:
      "Explore interactive courses, expert mentors, and a platform built for future‑ready learning.",
    path: "/",
    image: "/og/learnedge-og.jpg",
  },
  about: {
    title: "About — LearnEdge",
    description:
      "LearnEdge is a modern learning platform helping you master skills with expert‑led courses.",
    path: "/about",
    image: "/og/learnedge-og.jpg",
  },
  contact: {
    title: "Contact — LearnEdge",
    description: "Get in touch with the LearnEdge team for support and inquiries.",
    path: "/contact",
    image: "/og/learnedge-og.jpg",
  },
  courses: {
    title: "Courses — LearnEdge",
    description:
      "Browse our latest courses designed by industry experts to upgrade your skills.",
    path: "/courses",
    image: "/og/learnedge-og.jpg",
  },
};

export async function GET(_req, { params }) {
  const slug = (params?.slug || "").toLowerCase();
  const meta = PAGES[slug];

  if (!meta) {
    return NextResponse.json({ error: "SEO not found" }, { status: 404 });
  }

  return NextResponse.json({
    title: meta.title,
    description: meta.description,
    canonical: `${BASE}${meta.path}`,
    ogImage: meta.image.startsWith("http") ? meta.image : `${BASE}${meta.image}`,
  });
}
