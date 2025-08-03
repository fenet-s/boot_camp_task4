import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { FiBookmark, FiEdit2 } from 'react-icons/fi';
import { BsBookmarkFill } from 'react-icons/bs';
import { bookmarksAtom } from '../store/blogAtom'; 

export default function BlogDetails({ blogs }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  useEffect(() => {
    const found = blogs.find((b) => b.id.toString() === id);
    setBlog(found);
  }, [id, blogs]);

  if (!blog) return <p className="p-4 text-red-500">Blog not found</p>;

  const blogIdStr = blog.id.toString();
  const isBookmarked = bookmarks.includes(blogIdStr);

  const toggleBookmark = () => { 
    if (isBookmarked) {
       const newBookmarks = bookmarks.filter((b) => b !== blogIdStr);
        setBookmarks(newBookmarks);
        console.log("Bookmarks after removal:", newBookmarks);

    } else {
      
       const newBookmarks = [...bookmarks, blogIdStr];
        setBookmarks(newBookmarks);
        console.log("Bookmarks after addition:", newBookmarks);
    }
  };

  return (
    <div className="p-4 m-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline flex items-center"
        >
          ← Back
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleBookmark}
            className="text-gray-600 hover:text-blue-600"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {isBookmarked ? (
              <BsBookmarkFill size={24} color="#2563eb" />
            ) : (
              <FiBookmark size={24} />
            )}
          </button>

          <Link to={`/Edit/${id}`} className="text-gray-600 hover:text-blue-600">
            <FiEdit2 size={20} />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={blog.profile}
          alt={`${blog.author} profile`}
        />
        <p className="text-gray-700">{blog.author}</p>
      </div>

      <h1 className="text-2xl font-bold text-center mb-4">{blog.title}</h1>

      <img
        src={blog.image}
        className="w-full max-w-[1000px] h-auto rounded-xl object-cover mb-4 mx-auto"
        alt={blog.title}
      />

      <p className="text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>

      <div className="flex justify-center gap-4 mt-6">
        

       
      </div>
    </div>
  );
}
