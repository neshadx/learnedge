// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const email = searchParams.get("email");

//     const db = await connectDB();
//     const bookingsCollection = db.collection("bookings");

//     const bookings = email
//       ? await bookingsCollection.find({ userEmail: email }).toArray()
//       : await bookingsCollection.find().toArray();

//     return NextResponse.json(bookings);
//   } catch (err) {
//     console.error("GET /bookings error:", err);
//     return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const booking = {
//       courseId: body.courseId,
//       courseTitle: body.courseTitle,
//       userEmail: body.userEmail,
//       date: new Date(),
//       status: "confirmed",
//     };

//     const db = await connectDB();
//     const bookingsCollection = db.collection("bookings");

//     const result = await bookingsCollection.insertOne(booking);

//     return NextResponse.json({
//       message: "Booking successful",
//       bookingId: result.insertedId,
//     });
//   } catch (err) {
//     console.error("POST /bookings error:", err);
//     return NextResponse.json({ error: "Booking failed" }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email")?.trim().toLowerCase(); // ✅ clean email

    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    const query = email ? { userEmail: email } : {};
    console.log("📩 Query used:", query); // ✅ Log to terminal

    const bookings = await bookingsCollection.find(query).toArray();
    console.log("📦 DB Results:", bookings); // ✅ Log actual result

    return NextResponse.json(bookings);
  } catch (err) {
    console.error("❌ GET /bookings error:", err);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.courseId || !body.courseTitle || !body.userEmail) {
      return NextResponse.json(
        { error: "Missing booking fields" },
        { status: 400 }
      );
    }

    const booking = {
      courseId: body.courseId,
      courseTitle: body.courseTitle,
      userEmail: body.userEmail.trim().toLowerCase(), // ✅ normalize here too
      bookingDate: new Date(),
      status: "pending",
    };

    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    const result = await bookingsCollection.insertOne(booking);

    return NextResponse.json({
      message: "Booking successful",
      bookingId: result.insertedId,
    });
  } catch (err) {
    console.error("❌ POST /bookings error:", err);
    return NextResponse.json(
      { error: "Booking failed" },
      { status: 500 }
    );
  }
}
