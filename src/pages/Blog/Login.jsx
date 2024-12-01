import React, { useContext, useState } from 'react'
import { json, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [redirect, setRedirect] = useState('');
    const {setUserInfo} = useContext(UserContext);

    const apiUrl = import.meta.env.VITE_API_URL;

    async function login(ev) {
        ev.preventDefault();
        setIsSubmitting(true);

        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        if (response.ok) {
            response.json().then(UserInfo =>{
                setUserInfo(UserInfo);
                setRedirect(true);
            });
        } else {
            alert('Wrong credentials');
        }
    }

    if (redirect) {
        return <Navigate to={'/blog/admin'} />
    }
    return (
        <form className="mx-auto my-40 login max-w-lg flex flex-col gap-4 text-gray-900" onSubmit={login}>
            <h1 className='text-gray-100'>Login</h1>
            {/* {error && <p className="text-red-500">{error}</p>} */}

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

            <button type="submit" className='text-gray-100' disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
        </form>
    )
}

export default LoginPage