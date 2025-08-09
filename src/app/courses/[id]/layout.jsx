// src/app/courses/[id]/layout.jsx
import { fetchCourseSeo } from "@/lib/seo";

// params.id to API
export async function generateMetadata({ params }) {
  const seo = await fetchCourseSeo(params.id); // { title, description, canonical, ogImage }
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      images: [{ url: seo.ogImage, width: 1200, height: 630 }],
      type: "article",
      siteName: "LearnEdge",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export default function CourseLayout({ children }) {
  return <>{children}</>;
}
