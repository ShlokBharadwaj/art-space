import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.log('Passwords do not match');
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            console.log('Signing up with email:', emailRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value);
            console.log('Signup successful, navigating to home');
            navigate('/');
        } catch (err) {
            console.log('Signup failed:', err);
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setError('Email already in use');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email format');
                    break;
                case 'auth/operation-not-allowed':
                    setError('Signup not currently available');
                    break;
                case 'auth/weak-password':
                    setError('Password is too weak');
                    break;
                default:
                    setError('Failed to create an account');
                    break;
            }
        }

        setLoading(false);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
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
                    <div className="flex flex-col space-y-1">
                        <label>Password Confirmation</label>
                        <input type="password" ref={passwordConfirmRef} required className="border rounded px-3 py-2" />
                    </div>
                    <button disabled={loading} type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register