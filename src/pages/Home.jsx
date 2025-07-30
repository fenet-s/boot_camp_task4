import BlogCard from '../components/BlogCard';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png'


import tellogo from '../assets/tellogo.png'
import fb from '../assets/fb.png'
import { Link } from "react-router-dom";




//import all image

export default function Home({blogs}) {
 
  return (
    <> 
    <div style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px',borderRadius:'10px ',margin:"10px",color:"white", width:"95vw",  alignItems: 'center',
    justifyContent: 'center' }}>
      <h1 className='font-inter text-[30px] font-bold'>Featured</h1>
      <h1 className="text-[2rem] font-bold">Breaking into Product Design:</h1>
        <h2 className="text-[30px] font-Irish Grover font-bold">Advice from Untitled Founder, Frankie</h2>
        <p className="text-[1.1rem] flex m-13 font-bold ">
          
          Let’s get one thing out of the way:
          
          you don’t need a fancy Bachelor’s Degree to get into Product Design.{" "}
          
          We sat down with Frankie Sallivan to talk about gatekeeping in product
          design 
          and who anyone can get into this growing
           <img className='w-[160px] h-auto ' src={arrow}/>
          </p>
         
    </div>
    <h2 className='m-4 font-Semi Bold'>Recent Blog Posts</h2>
    <div className="flex flex-row flex-wrap m-4  ">
    
      
      {blogs.map((blog) => (
        
        <BlogCard id={blog.id} image={blog.image} key={blog.id} title={blog.title} author={blog.author} Date={blog.createdAt} profile={blog.profile} description={blog.description} />
       
      ))}
    </div>
    <div className='m-2 flex justify-center p-4  '>
       <button className='bg-black text-white w-[200px] h-[50px] rounded-[10px]'>show more</button>
    </div>
    <footer className='flex justify-between bg-black text-white w-full h-[50px] '>
      <p>Blog</p>
      <div>
        
        <p> &copy; 2025 Blog. All rights are reserved.</p>
       
      </div>
      <div className='flex display-end w-[40px] h-auto'>
        <img src={tellogo} />
         <img className='rounded-none'src={fb} />
          <img src={tellogo} />

      </div>

    </footer>
   

    
    </>
   
  );
}
