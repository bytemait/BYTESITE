import { LogOut } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';

const Admin = () => {
    const { setUserInfo, UserInfo } = useContext(UserContext);
    const apiUrl = import.meta.env.VITE_API_URL;
    useEffect(() => {
        fetch(`${apiUrl}/profile`, {
            credentials: 'include',
        }).then(response => {
            response.json().then(UserInfo => {
                setUserInfo(UserInfo);
            })
        })
    }, []);

    const username = UserInfo?.username;

    function logout() {
        fetch(`${apiUrl}/logout`, {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }
    return (
        <nav className="w-full py-[300px] flex gap-12 justify-center items-center">
            {username ? (
                <div className='flex flex-col justify-center items-center gap-12'>
                    {UserInfo.isAdmin ?
                        (<h1 className="text-3xl font-bold text-gray-100">Admin in da house!! Sup, {username}</h1>)
                        : (<h1 className="text-3xl font-bold text-gray-100">Welcome, {username}</h1>)}

                    <Link to='/blog/create'>Create new post</Link>
                    <div onClick={logout} className='flex gap-2'>
                        <p>Logout</p>
                        <LogOut className='text-2xl text-gray-200' />
                    </div>
                </div>
            ) : (
                <div className='flex gap-12 justify-center items-center'>
                    <Link to="/blog/login" className="text-2xl bg-gray-800 rounded-lg p-4 mx-4">Login</Link>
                    <Link to="/blog/register" className="text-2xl bg-gray-800 rounded-lg p-4 mx-4">Register</Link>
                </div>
            )}
        </nav>
    )
}

export default Admin