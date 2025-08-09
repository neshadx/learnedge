// // src/lib/seo.js
// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// /** Static pages: home, about, contact, courses (list) */
// export async function fetchSeo(slug) {
//   const res = await fetch(`${BASE}/api/seo/${slug}`, {
//     cache: "no-store",
//     //  headers/cookies 
//   });
//   if (!res.ok) {
//     throw new Error(`SEO fetch failed for "${slug}"`);
//   }
//   return res.json(); // { title, description, canonical, ogImage }
// }

// /** Dynamic course details: /courses/[id] */
// export async function fetchCourseSeo(id) {
//   const res = await fetch(`${BASE}/api/seo/courses/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error(`Course SEO fetch failed for id "${id}"`);
//   }
//   return res.json(); // { title, description, canonical, ogImage }
// }



const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchSeo(slug) {
  const res = await fetch(`${BASE}/api/seo/${slug}`, { cache: "no-store" });
  if (!res.ok) throw new Error("SEO fetch failed");
  return res.json();
}

export async function fetchCourseSeo(id) {
  const res = await fetch(`${BASE}/api/seo/courses/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Course SEO fetch failed");
  return res.json();
}
