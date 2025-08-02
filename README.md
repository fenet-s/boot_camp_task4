# React Personal Blog App

A personal blog application built with React, React Router, and Jotai for state management. This app allows users to view, create, edit, bookmark, and manage blog posts with a clean and responsive UI.

---

## Features

- **View Blogs:** Browse all published blog posts on the home page.
- **Create Blog Post:** Add new blog posts via a form.
- **Edit Blog Post:** Update existing blog posts with pre-filled form data.
- **Bookmark Blogs:** Bookmark/unbookmark favorite blogs and view them in a dedicated bookmarks page.
- **Dynamic Routing:** Navigate through different pages using React Router (`Home`, `BlogDetails`, `EditBlog`, `BookMarks`).
- **Global State Management:** Manage blogs and bookmarks state globally using [Jotai](https://jotai.org/).
- **Responsive UI:** Simple and clean user interface using Tailwind CSS for styling.

---

## Tech Stack

- React (with hooks)
- React Router DOM
- Jotai (state management)
- Tailwind CSS (styling)
- React Icons (icons)
- JavaScript (ES6+)

---

## Project Structure

src/
├── assets/ # Images and media files
├── components/ # Reusable components like Navbar, BlogCard, BlogForm
├── pages/ # Pages like Home, BlogDetails, EditBlog, BookMarks
├── store/ # Jotai atoms for global state
├── App.jsx # Main app component with routes and state management
└── index.jsx # Entry point

yaml
Copy
Edit

---

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/react-personal-blog.git
cd react-personal-blog
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Run the app

bash
Copy
Edit
npm start
# or
yarn start
The app will open at http://localhost:3000

Usage
Navigate to the homepage to see all blog posts.

Click a blog title or image to view details.

Use the "Edit" icon on the blog details page to edit a post.

Use the bookmark icon to add or remove blogs from your bookmarks.

Visit the "Bookmarks" page to see all your bookmarked blogs.

Create new blogs by navigating to the BlogForm page.

Important Code Highlights
State synchronization: The React state for blogs is kept in sync with Jotai atoms to allow shared global state.

Editing Blogs: EditBlog component receives the blog list and an updatedBlog callback prop to update the main blog state.

Bookmarking: Bookmarked blog IDs are stored in a separate Jotai atom and matched with blogs for display.

Routing: Uses dynamic routing for blog details and editing via React Router's useParams.

Future Improvements
Add user authentication and authorization.

Add rich text editor support for blog content.

Enable image uploads for blog posts.

Add pagination or infinite scroll on the blog list.

Enhance UI/UX with animations and better mobile support.

Persist data to a backend server or local storage.

License
This project is open source and available under the MIT License.

Contact
Created by fenetseifudin@gmail.com feel free to reach out for questions or collaborations!
