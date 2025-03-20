'use client'; 
import { useEffect, useContext } from "react";
import { useRouter } from 'next/navigation'; 
import AuthContext from "../context/AuthContext";

export default function Profile() {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            router.push("/login"); // Redirect to login if not logged in
        }
    }, [user, router]);
    if (!user) return null; 

    return (
        <div>
            <h2>Welcome, {user.id}</h2>
        </div>
    );
}
