import { SyncLoader } from "react-spinners";
import { Appbar } from "../components/Appbar";
import Blogcard from "../components/Blogcard";
import { useBlogs } from "../hooks";
import { useName } from "../hooks/namehook";
export function Blog() {
  const { blogs, loading } = useBlogs();
  const { name } = useName();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SyncLoader className="text-2xl" color="#912BBC" />
      </div>
    );
  }
  return (
    <div>
      <Appbar name={name ? name : "Anonymous"}></Appbar>
      <div className="flex justify-center gap-2">
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => {
            return (
              <Blogcard
                key={blog.id}
                id={blog.id}
                name={blog.author.name}
                date={blog.createdAt}
                title={blog.title}
                content={blog.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
