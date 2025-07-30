import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogDetails({ blogs }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogs.find((b) => b.id.toString() === id);
    setBlog(found);
  }, [id, blogs]);

  if (!blog) return <p>not found</p>;

  return (
    <div className="p-4 m-8">
      <p className="text-gray-600 flex items-center gap-2 justify-center"><img className='w-[50px] h-[50px] rounded-[50px] 'src={blog.profile}/>
      {blog.author}
      </p>
      <h1 className="flex justify-center text-2xl font-bold ">{blog.title}</h1>
      
      <img src={blog.image} className='w-[1000px] h-auto rounded-[20px] object-cover rounded mb-4'/>
      
      
      <p>{blog.content}</p>
      <Link to={'/'}><p className='flex justify-center underline text-blue-500 text-lg'>Back to Home</p></Link>
    </div>
  );
}
