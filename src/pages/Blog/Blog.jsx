import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const { UserInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/blog/${id}`).then((response) => {
      response.json().then((data) => {
        setBlogData(data);
      });
    });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((UserInfo) => {
        setUserInfo(UserInfo);
      });
    });
  }, []);

  const handleEdit = () => {
    navigate(`/blog/edit/${blogData._id}`, { state: { blogData } });
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (isConfirmed) {
      try {
        const response = await fetch(`${apiUrl}/admin/blogs/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to delete the blog.");
        }

        alert("Blog deleted successfully.");
        navigate("/blog");
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to delete the blog.");
      }
    }
  };

  if (!blogData) {
    return <div className="text-center py-12 text-xl">Loading...</div>;
  }

  const authorUsername = blogData.author
    ? blogData.author.username
    : "Unknown Author";
  return (
    <div className="w-full bg-gray-900 text-gray-100 px-6 pt-20 pb-16">
      <div className="container mx-auto max-w-7xl">
        <article className="rounded-xl overflow-hidden shadow-lg">
          <div className="text-center py-12 px-6">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-wide">
              {blogData.title}
            </h1>
            <div className="flex justify-center items-center space-x-4 text-gray-400">
              <span className="text-sm">{authorUsername}</span>
              <span className="text-xs">•</span>
              <time className="text-sm">
                {new Date(blogData.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex justify-center gap-6">
              {((blogData.author && UserInfo.id === blogData.author._id) ||
                UserInfo.isAdmin) && (
                <div className="flex justify-center items-center gap-2 p-2 mt-4 bg-gray-500 rounded-lg max-w-[160px]">
                  <TbEdit size={30} />
                  <button onClick={handleEdit}>Edit this Blog</button>
                </div>
              )}
              {UserInfo.isAdmin && (
                <div className="flex justify-center items-center gap-2 p-2 mt-4 bg-red-700 rounded-lg max-w-[180px]">
                  <MdDelete size={30} />
                  <button onClick={() => handleDelete(blogData._id)}>
                    Delete this Blog
                  </button>
                </div>
              )}
            </div>
          </div>

          {blogData.cover && (
            <div className="relative w-full h-[500px] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src={`${blogData.cover}`}
                alt="Blog Cover"
              />
            </div>
          )}

          <div className="px-8 md:px-16 py-10">
            <p className="text-xl italic border-l-4 border-teal-400 pl-6 mb-12">
              {blogData.summary}
            </p>

            <div
              className="prose prose-invert prose-lg max-w-none 
                                prose-headings:text-gray-100 
                                prose-p:text-gray-300 
                                prose-a:text-teal-400 
                                prose-a:underline hover:prose-a:text-teal-200 
                                prose-strong:text-gray-100 
                                prose-code:bg-gray-800 
                                prose-code:text-teal-400 
                                prose-code:px-2 
                                prose-code:py-1 
                                prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
