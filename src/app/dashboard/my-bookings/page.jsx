

// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// const MyBookingsPage = () => {
//   const { data: session } = useSession();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch(`/api/bookings?email=${session?.user?.email}`);
//         const data = await res.json();
//         setBookings(data);
//       } catch (error) {
//         console.error("Error fetching my bookings:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (session?.user?.email) {
//       fetchBookings();
//     }
//   }, [session?.user?.email]);

//   if (loading) return <div className="p-6 text-gray-500">Loading your bookings...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">My Bookings</h1>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">You have not booked any courses yet.</p>
//       ) : (
//         <div className="overflow-x-auto border rounded-md">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-3">Course</th>
//                 <th className="p-3">Booking Date</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{booking.courseTitle}</td>
//                   <td className="p-3">
//                     {new Date(booking.bookingDate || booking.date).toLocaleDateString()}
//                   </td>
//                   <td className="p-3 capitalize">
//                     <span
//                       className={`inline-block px-2 py-1 rounded text-xs font-medium ${
//                         booking.status === "pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookingsPage;


"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const MyBookingsPage = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      console.log("👤 Session email:", session?.user?.email);

      const res = await fetch(`/api/bookings?email=${session?.user?.email}`);
      const data = await res.json();
      console.log("📦 Fetched bookings:", data);
      setBookings(data);
    } catch (error) {
      console.error("❌ Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      fetchBookings();
    }
  }, [status, session?.user?.email]);

  const handleCancel = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (res.ok) {
        alert("❎ Booking cancelled.");
        fetchBookings(); // Refresh list
      } else {
        alert(result.error || "Failed to cancel booking.");
      }
    } catch (err) {
      console.error("❌ Error cancelling booking:", err);
    }
  };

  if (status === "loading" || loading) {
    return <div className="p-6 text-gray-500">Loading your bookings...</div>;
  }

  if (!session) {
    return <div className="p-6 text-red-500">⚠️ You must be logged in to view bookings.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You have not booked any courses yet.</p>
      ) : (
        <div className="overflow-x-auto border rounded-md">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Course</th>
                <th className="p-3">Booking Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{booking.courseTitle}</td>
                  <td className="p-3">
                    {new Date(booking.bookingDate || booking.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 capitalize">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
