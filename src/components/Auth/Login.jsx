import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            console.log('Logging in with email:', emailRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value);
            console.log('Login successful, navigating to home');
            navigate('/');
        } catch (err) {
            console.log('Login failed:', err);
            switch (err.code) {
                case 'auth/invalid-credential':
                    setError('Invalid Credentials');
                    break;
                case 'auth/user-disabled':
                    setError('This user has been disabled');
                    break;
                case 'auth/user-not-found':
                    setError('User not found');
                    break;
                default:
                    setError('Failed to log in');
                    break;
            }
        }

        setLoading(false);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Log In</h1>
                {error && <div className="p-2 bg-red-500 text-white rounded">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col space-y-1">
                        <label>Email</label>
                        <input type="email" ref={emailRef} required className="border rounded px-3 py-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label>Password</label>
                        <input type="password" ref={passwordRef} required className="border rounded px-3 py-2" />
                    </div>
                    <button disabled={loading} type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login