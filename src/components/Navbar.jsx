import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import BlogForm from '../components/BlogForm'; 

// import CreateBlog from '../pages/CreateBlog'

const Navbar = ({addPost}) => {
   const [showForm, setShowForm] = useState(false);
     const handlePostSubmit = (newBlog) => {
         addPost(newBlog);        // Call function from App.jsx
         setShowForm(false);      // Close modal
  };
  return (
    <>
    <nav className='flex justify-between w-[95%]'>
        <div>
          <h1 className='h-[60px] w-[120px] left-[82px] font-[700] text-[30px]'>Blog</h1>
          </div>
        
      <ul className='flex justify-center space-x-6'>
      
        
            <li><Link to='/'><button className='bg-black text-white  weight-600 rounded-[10px] w-[107px] h-[47px]  font-[700] ml- '>
          Home </button></Link></li>
        <li><h1>Saved</h1></li>
        <li><Link to='/BookMarks'><h1>Book Mark</h1></Link></li>
      </ul>
      <div className="flex justify-end ">
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-4 py-2 rounded-[10px]"
        >
          Post a Blog
        </button>

      </div>
      
        
        
        
    </nav>
         {showForm && (
        <BlogForm
          onSubmit={handlePostSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

    
    </>
    

      
  )
}

export default Navbar