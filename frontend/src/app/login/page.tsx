'use client'; // Marking the file as a client component

import { useState, useEffect, useContext } from "react";
import AuthContext from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation'; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
        router.push("/profile"); // Redirect to login if not logged in
    }
}, [user, router]);


  const handleLogin = async (e: React.FormEvent) => {

      e.preventDefault();
        await login(email, password);
        router.push("/profile");

  };
  

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          className="w-full p-2 border mb-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
