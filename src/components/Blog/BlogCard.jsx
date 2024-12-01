import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
const BlogCard = ({ index, post }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    return (
        <Link to={`/blog/${post._id}`} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={apiUrl + '/' + post.cover}
                alt={post.title}
                className="w-full h-48 object-cover"
            />
            <div className="flex flex-col p-4">
                <h3 className="text-xl font-bold text-gray-800">
                    {post.title}
                </h3>
                <div className='flex w-full justify-between'>
                    <p className="text-sm text-gray-600">
                        by {post.author.username}
                    </p>
                    <p className="text-sm text-gray-600">
                        <time>{format(new Date(post.createdAt), 'd MMM, yyyy HH:mm')}</time>
                    </p>
                </div>
                <div className="text-md text-indigo-500 font-medium mt-4">
                    Inside: {post.summary}
                </div>
                {/* <p className="text-sm text-gray-600">
                    {post.content}
                </p> */}

            </div>
        </Link>
    )
}

export default BlogCard