"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="glass p-10 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">NoteNest</h1>
        <form onSubmit={handleLogin} className="space-y-6">
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
            placeholder="Password"
            required
            className="w-full px-5 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70"
          />
          <button
            type="submit"
            className="w-full bg-white text-purple-600 font-bold py-4 rounded-2xl hover:bg-gray-100 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}