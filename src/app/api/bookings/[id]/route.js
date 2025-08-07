import { NextResponse } from "next/server";

let bookings = [];

export async function PATCH(req, { params }) {
  const index = bookings.findIndex((b) => b.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  bookings[index].status = "approved";
  return NextResponse.json({ message: "Booking approved", booking: bookings[index] });
}
