import React, { useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Failed to log in");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold">Log In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label>Email</label>
                        <input type="email" ref={emailRef} required className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" ref={passwordRef} required className="w-full px-3 py-2 border rounded" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
