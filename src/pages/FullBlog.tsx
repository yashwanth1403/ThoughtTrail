import { useParams } from "react-router-dom";
import { useFullBlog } from "../hooks/fullbloghook";
import { Appbar } from "../components/Appbar";
import { Fullblogcard } from "../components/Fullblogcard";
import { SyncLoader } from "react-spinners";

export function FullBlog() {
  const { id } = useParams<{ id: string }>();

  const { loading, blog } = useFullBlog({ id: id || "" });

  if (!id) {
    return <div>Error: No blog ID provided</div>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        loading....
        <SyncLoader className="text-5xl" color="#912BBC" />
      </div>
    );
  }

  return (
    <div>
      <Appbar name={"yashwanth"} />
      <Fullblogcard
        content={blog?.content || ""}
        title={blog?.title || ""}
        date={blog?.createdAt || ""}
        name={blog?.author?.name || ""}
      />
    </div>
  );
}
