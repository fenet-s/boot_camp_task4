import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

export default function EditBlog({ blogs, updatedBlog }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const navigate=useNavigate();

  const handleUpdate = (data) => {
    const updated = {
      ...data,
      id,
      createdAt: blog.createdAt,
      editedAt: new Date().toISOString(),
    };
    updatedBlog(updated);
    navigate('/')
  };

  return (
    <div>
      <h2 className="text-xl font-bold p-4">Edit Blog</h2>
      <BlogForm onSubmit={handleUpdate} initialData={blog}  onClose={()=>navigate('/')}/>
    </div>
  );
}
