import React, { useState } from 'react';
import image from '../assets/image.png';

const BlogForm = ({ initialData = {}, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    description: initialData.description || '',
    content: initialData.content || '',
    profile: initialData.profile || '',
    date: initialData.date || '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError('Title is required');
      return;
    }

    const newBlog = {
      ...form,
      id: Date.now(), // Unique ID
      createdAt: new Date().toISOString(),
    };

    onSubmit(newBlog); // Call addPost() from Home.jsx
  };

  return (
    // <div className="fixed inset-0  flex items-center justify-center z-50">
    <div
      className="relative bg-cover bg-center w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${image})`, minHeight: '80vh' }}
    >
      <div className="absolute inset-0 bg-opacity-40 z-0" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 space-y-4 bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-[85%] max-w-4xl"
      >
        {error && <p className="text-red-500">{error}</p>}
        <h1 className="font-semibold text-[30px] text-center text-black">
          {initialData.title ? 'Edit Blog' : 'Post a Blog'}
        </h1>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-black">Author</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-black">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-black">Profile</label>
          <input
            type="url"
            name="profile"
            value={form.profile}
            onChange={handleChange}
            placeholder="https://example.com"
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black">Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black">Content</label>
          <textarea
            name="content"
            rows={5}
            value={form.content}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default BlogForm;


