'use client'; 
import Link from 'next/link';
import { useContext } from "react";
import AuthContext from "@/app/context/AuthContext";

export default function Header () {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Mern</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            {!user && (
              <>
              <li><Link href="/login" className="hover:underline">Login</Link></li>
              <li><Link href="/register" className="hover:underline">Register</Link></li> 
              </>
            )}

            {user && (
              <>
                <li><Link href="/profile" className="hover:underline">Profile</Link></li> 
                <li><Link href="#" onClick={(e) => { e.preventDefault(); logout(); }} className="hover:underline">Logout</Link></li> 
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};