"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="glass p-10 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Create Account</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-5 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70"
          />
          <input
            name="password"
            type="password"
            placeholder="Password (6+ chars)"
            required
            minLength={6}
            className="w-full px-5 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70"
          />
          <button
            type="submit"
            className="w-full bg-white text-purple-600 font-bold py-4 rounded-2xl hover:bg-gray-100 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}