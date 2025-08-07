"use client";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleDemoLogin = () => {
    signIn("credentials", {
      email: "demo@email.com",
      password: "123456",
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to <span className="text-green-600">LearnEdge</span>
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded mb-4"
        >
          Continue with Google
        </button>

        <button
          onClick={handleDemoLogin}
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded"
        >
          Login with Demo Credentials
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <span className="underline">Register (Coming Soon)</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
