import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAtom } from 'jotai';
import { blogsAtom, bookmarksAtom } from './store/BlogAtom';

import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './pages/EditBlog';
import Home from './pages/Home';
import BookMarks from './pages/BookMarks';

import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import blog4 from "./assets/blog4.png";
import blog5 from "./assets/blog5.png";
import blog6 from "./assets/blog6.png";
import pro1 from "./assets/pro1.png";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      image: blog1,
      id: '1',
      title: 'Migrating to Linear 101',
      author: 'Nebiyu Musbah',
      description: 'Linear helps streamline software projects...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog2,
      id: '2',
      title: 'The Power of Morning Routines',
      author: 'Abdulaziz Isa',
      description: 'Discover how a simple morning routine...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog3,
      id: '3',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Struggling with focus while working remotely?',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog4,
      id: '4',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Writing just a few minutes a day...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog5,
      id: '5',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Sitting all day can cause stiffness...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog6,
      id: '6',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Constant screen time draining your energy?',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog3,
      id: '7',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Digital detox can refresh your mind...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog3,
      id: '8',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Digital detox can refresh your mind...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
    {
      image: blog3,
      id: '9',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Digital detox can refresh your mind...',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals...',
      profile: pro1,
    },
  ]);

  const [, setBlogsAtom] = useAtom(blogsAtom);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  
  useEffect(() => {
    setBlogsAtom(blogs);
  }, [blogs, setBlogsAtom]); 


  const addPost = (newPost) => {
    const updated = [...blogs, newPost];
    setBlogs(updated);
    setBlogsAtom(updated); 
  };

 
  const updatedBlog = (updated) => {
    const updatedList = blogs.map((b) => (b.id === updated.id ? updated : b));
    setBlogs(updatedList);
    setBlogsAtom(updatedList); 
  };

  return (
    <div>
      <Navbar addPost={addPost} />
      <Routes>
        <Route
          path="/"
          element={<Home blogs={blogs} addPost={(newBlog) => setBlogs([newBlog, ...blogs])} />}
        />
        <Route
          path="/Blog/:id"
          element={<BlogDetails blogs={blogs} bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route path="/BookMarks" element={<BookMarks />} />
        <Route path="/BlogForm" element={<BlogForm onSubmit={addPost} />} />
        <Route path="/Edit/:id" element={<EditBlog blogs={blogs} updatedBlog={updatedBlog} />} />
      </Routes>
    </div>
  );
};

export default App;
