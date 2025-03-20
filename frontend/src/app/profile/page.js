'use client'; 
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Profile() {
    const { user, logout } = useContext(AuthContext);

    if (!user) return <p>Please login</p>;

    return (
        <div>
            <h2>Welcome, {user.id}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
