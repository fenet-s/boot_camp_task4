import { Link } from 'react-router-dom';



export default function BlogCard({ image,id,title,author,createdAt,profile,description }) {
  return (
     <Link to={`/blog/${id}`} className="">
    <div className=" border-none p-4 rounded bg-white shadow  w-[380px] h-auto m-2 ">
     
        <img className='rounded-[25px]' src={image}/>
   
      
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="text-gray-600 flex items-center gap-2"><img className='w-[50px] h-[50px] rounded-[50px] 'src={profile}/>
      {author}
      </p>
      <p>{createdAt}</p>
    

     

      
      
    </div>
       </Link>
  );
}
