

// "use client";

// import { useEffect, useState } from "react";
// import { useSession, signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const { data: session } = useSession();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (session?.user) {
//       router.push("/dashboard");
//     }
//   }, [session, router]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       return alert("Please enter email and password.");
//     }

//     const result = await signIn("credentials", {
//       email: form.email,
//       password: form.password,
//       callbackUrl: "/dashboard",
//       redirect: true,
//     });

//     // You can also handle custom error if needed
//   };

//   const handleGoogleLogin = () => {
//     signIn("google", { callbackUrl: "/dashboard" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Login to <span className="text-green-600">LearnEdge</span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4 mb-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition"
//           >
//             Login
//           </button>
//         </form>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md transition"
//         >
//           Continue with Google
//         </button>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <a href="/register" className="text-green-600 underline hover:text-green-700">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


"use client";

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 🔁 Redirect if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // or "/"
    }
  }, [status, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return alert("Please enter email and password.");
    }

    await signIn("credentials", {
      email: form.email,
      password: form.password,
      callbackUrl: "/dashboard", // optional
      redirect: true,
    });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to <span className="text-green-600">LearnEdge</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 underline hover:text-green-700">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

