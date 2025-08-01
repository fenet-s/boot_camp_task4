import BlogDetails from './pages/BlogDetails'
import { useState } from 'react'
import EditBlog from './pages/EditBlog'
import Home from './pages/Home'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import BookMarks from './pages/BookMarks'
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import blog4 from "./assets/blog4.png";
import blog5 from "./assets/blog5.png";
import blog6 from "./assets/blog6.png";
import pro1 from "./assets/pro1.png"
import BlogForm from './components/BlogForm';
import { useAtom } from 'jotai';
import { bookmarksAtom } from './store/BlogAtom'; // adjust path if needed

const App= () => {
  const [bookmarks,setBookmarks]=useAtom(bookmarksAtom);
 const [blogs,setBlogs] = useState([
    
    { image:blog1,
      id: '1',
      title: 'Migrating to Linear 101',
      author: 'Nebiyu Musbah',
      description: 'Linear helps stream line software projects, sprints, tasks & bug tracking. Here is how to get started!',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,

    },
     {
      image:blog2,
      id: '2',
      title: 'The Power of Morning Routines',
      author: 'Abdulaziz Isa',
      description: 'Discover how a simple morning routine can boost productivity. Ready to transform your mornings?',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
     
    },
     {
      image:blog3,
      id: '3',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Struggling with focus while working remotely? Try these proven strategies to stay motivated and productive.',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
       
    },
     {
      image:blog4,
      id: '4',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Writing just a few minutes a day can improve mental clarity and reduce stress. Ready to start your journaling habit?',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
      
    },
     {
      image:blog5,
      id: '5',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Sitting all day can cause stiffness—try these easy stretches to stay limber and pain-free.',
     createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
       
    },
     {
      image:blog6,
      id: '6',
      title: 'React Hooks',
      author: 'Apple',
      description: 'Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.',
     createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
      
    },
    {
      image:blog3,
      id: '7',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.',
   createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
       
    },
    {
      image:blog3,
      id: '8',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
       
    },
    {
      image:blog3,
      id: '9',
      title: 'Meal Prep in Minutes',
      author: 'Emily Carter',
      description: 'Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.',
      createdAt: '19 Jul 2025',
      content: 'Write down your meals for the week. Focus on overlapping ingredients to reduce waste and cooking time.',
      profile:pro1,
      
       
    },
  ]);
  const addPost=(newPost)=>{
    setBlogs([...blogs,newPost])

  }
const updatedBlog=(updated)=>{
  setBlogs((prev)=>
  prev.map((b)=>(b.id===updated.id?updated: b)))
}

 return (
  <div>
  <Navbar addPost={addPost}/>
  <Routes>
    <Route path='/' element={<Home blogs={blogs} addPost={(newBlog)=> setBlogs([newBlog, ...blogs])}/>} />
    {/* <Route path='/Edit/:id' element={<EditBlog/>} /> */}
    <Route path='/Blog/:id' element={<BlogDetails blogs={blogs} bookmarks={bookmarks} setBookmarks={setBookmarks}/>} />
    <Route path='/BookMarks' element={<BookMarks blogs={blogs} BookMarks={BookMarks}/>} />
    <Route path='/BlogForm' element={<BlogForm/>}/>
    <Route 
  path='/Edit/:id' 
  element={<EditBlog blogs={blogs} updatedBlog={updatedBlog} />}
/>

  
  </Routes>
 
   </div>
   


 )
  


 }

 
  
  


export default App
