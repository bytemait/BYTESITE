import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Editor from './Editor';
const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL;

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', image);

        const response = await fetch(`${apiUrl}/create`, {
            method: 'POST',
            body: data,
            credentials: 'include'
        });

        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to="/blog" />
    }
    return (
        <div className="flex flex-col py-32 w-full gap-12 justify-center items-center">
            <h1 className="text-3xl font-bold">Create a New Blog Post</h1>
            <form className="flex flex-col w-[600px] gap-6 text-black" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Summary"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />

                <input
                    type="file"
                    className="p-2 border border-gray-300 rounded-lg"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <div className='bg-gray-200 p-4 rounded-lg'>
                    <Editor
                        value={content}
                        onChange={setContent}
                    />
                </div>

                <button type="submit" className="mt-12 bg-gray-700 text-white rounded-xl p-2 hover:bg-gray-600 transition-colors">
                    Create Blog
                </button>
            </form>
        </div>
    )
}

export default CreateBlog