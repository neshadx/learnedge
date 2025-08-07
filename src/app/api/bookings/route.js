export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  const bookings = email
    ? await bookingsCollection.find({ userEmail: email }).toArray()
    : await bookingsCollection.find().toArray();

  return NextResponse.json(bookings);
}
