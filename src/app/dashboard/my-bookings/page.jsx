"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const MyBookingsPage = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`/api/bookings?email=${session?.user?.email}`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchBookings();
    }
  }, [session?.user?.email]);

  if (loading) return <div className="p-6">Loading your bookings...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Course</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-t">
                <td className="p-2">{booking.courseTitle}</td>
                <td className="p-2">
                  {new Date(booking.date).toLocaleDateString()}
                </td>
                <td className="p-2 capitalize">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookingsPage;
