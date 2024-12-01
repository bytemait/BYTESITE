import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import Editor from './Editor';
import 'react-quill/dist/quill.snow.css'

const EditBlog = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { blogData } = location.state;
    const [title, setTitle] = useState(blogData.title);
    const [summary, setSummary] = useState(blogData.summary);
    const [content, setContent] = useState(blogData.content);
    const [image, setImage] = useState(blogData.cover);
    const [redirect, setRedirect] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL;
    
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
        }
    };

    const getImageSrc = () => {
        if (image instanceof File) {
            return URL.createObjectURL(image);
        } else if (typeof image === 'string') {
            return `${apiUrl}/${image.replace(/\\/g, '/')}`;
        }
        return null;
    };

    async function updateBlog(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);

        if (image instanceof File) {
            data.set('file', image);
        }

        const response = await fetch(`${apiUrl}/create`, {
            method: 'PUT',
            body: data,
            credentials: 'include'
        });

        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={"/blog/" + id} />
    }
    return (
        <div className="flex flex-col py-32 w-full gap-12 justify-center items-center">
            <h1 className="text-3xl font-bold">Edit Blog Post</h1>
            <form className="flex flex-col w-[600px] gap-6 text-black" onSubmit={updateBlog}>
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

                {getImageSrc() && (
                    <img
                        className="mt-6 w-full h-auto rounded-md shadow-lg"
                        src={getImageSrc()}
                        alt="Blog Cover"
                    />
                )}

                <input
                    type="file"
                    accept="image/*"
                    className="p-2 border text-white border-gray-300 rounded-lg"
                    onChange={handleImageChange}
                />

                <div className='bg-gray-200 p-4 rounded-lg'>
                    <Editor
                        value={content}
                        onChange={setContent}
                    />
                </div>

                <button type="submit" className="mt-12 bg-gray-700 text-white rounded-xl p-2 hover:bg-gray-600 transition-colors">
                    Update Blog
                </button>
            </form>
        </div>
    )
}

export default EditBlog