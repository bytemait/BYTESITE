import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // State to track the checkbox
    const [adminCode, setAdminCode] = useState(''); // State to track the admin code
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL;

    function register(ev) {
        ev.preventDefault();
        setIsSubmitting(true);

        const requestBody = { username, password };

        if (isAdmin) {
            requestBody.adminCode = adminCode;
        }

        fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
            alert('Registration successful');
            setRedirect(true);
            setIsSubmitting(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setError(error.message);
            setIsSubmitting(false); 
        });
    }

    if (redirect) {
        return <Navigate to='/blog/admin' />;
    }

    return (
        <form className="mx-auto my-40 register max-w-lg flex flex-col gap-4 text-gray-900" onSubmit={register}>
            <h1 className="text-gray-100">Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            
            <input 
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)} 
                required 
            />
            
            <input 
                type="password" 
                placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)} 
                required 
            />
            
            <label className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={isAdmin} 
                    onChange={ev => setIsAdmin(ev.target.checked)} 
                />
                {/* <span>Are you an Admin?</span> */}
            </label>
            
            {isAdmin && (
                <input 
                    type="text" 
                    placeholder="Admin Code" 
                    value={adminCode} 
                    onChange={ev => setAdminCode(ev.target.value)} 
                    required 
                />
            )}
            
            <button type="submit" className="text-gray-100" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
}