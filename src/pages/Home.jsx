
import tellogo from '../assets/tellogo.png'
import fb from '../assets/fb.png'
import gmail from'../assets/gmail.png'
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import BlogForm from '../components/BlogForm';

export default function Home({ blogs, addPost }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showForm, setShowForm] = useState(false);

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);

  const handlePostSubmit = (newBlog) => {
    addPost(newBlog);        // Call function from App.jsx
    setShowForm(false);      // Close modal
  };

    return (
    <div className="p-4">
      <div className="flex justify-end mb-4 mt-0">
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Post a Blog
        </button>
      </div>

      {showForm && (
        <BlogForm
          onSubmit={handlePostSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, visibleCount).map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>

      {visibleCount < blogs.length && (
       <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-black text-white px-4 py-2 rounded w-[8rem] h-auto"
          >
            Show More
          </button>
        </div>
      )}
      
        <footer className="m-4 bg-black text-white flex flex-wrap flex-row justify-between w-[98%] h-auto rounded items-center ">
        <p className='ml-4'>Blog</p>
        <p> &copy;2025 Blog. All rights are reserved.</p>
        <div className="flex h-[3rem] w-[3.8rem]  mt-5 ">
          <img src={tellogo} alt="TG LOGO" className=" h-[1rem] w-[1rem]" />
          <img src={fb} alt="FB LOGO" className=" h-[1rem] w-[1rem]" />
          <img src={gmail} alt="EMAIL LOGO" className=" h-[1rem] w-[1rem]" />
        </div>
      </footer>
    </div>
  );

}
