import React from 'react';
import { useAtom } from 'jotai';
import { blogsAtom, bookmarksAtom } from '../store/BlogAtom';
import BlogCard from '../components/BlogCard'; // or wherever you display a single blog

export default function BookMarks() {
  const [blogs] = useAtom(blogsAtom);           // All blogs
  const [bookmarks] = useAtom(bookmarksAtom);   // Array of bookmarked IDs


  const bookmarkedBlogs = blogs.filter(blog => bookmarks.includes(blog.id));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Blogs</h1>
      {bookmarkedBlogs.length === 0 ? (
        <p className="text-gray-500">You haven't bookmarked any blogs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarkedBlogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      )}
    </div>
  );
}
