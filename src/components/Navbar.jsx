import React from 'react'
import {Link} from 'react-router-dom'
// import CreateBlog from '../pages/CreateBlog'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-[80%]'>
        <div>
          <h1 className='h-[60px] w-[120px] left-[82px] font-[700] text-[30px]'>Blog</h1>
          </div>
        
      <ul className='flex justify-center space-x-6'>
      
        
            <li><Link to='/'><button className='bg-black text-white  weight-600 rounded-[10px] w-[107px] h-[47px]  font-[700] ml- '>
          Home </button></Link></li>
        <li><h1>Saved</h1></li>
        <li><Link to='/BookMarks'><h1>Book Mark</h1></Link></li>
      </ul>
      


    {/* <div className=''>
            <Link to='/BlogForm'>
            <button className='bg-black text-white rounded-[10px] w-[150px] h-[60px] left-[1100px] font-[800] leading-[100%] tracking-[0%] '>Post a Blog </button>
            </Link> 
            </div> */}
        
        
    </nav>
  )
}

export default Navbar