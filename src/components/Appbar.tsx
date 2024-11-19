import { Avatar } from "./Blogcard";
import { useNavigate } from "react-router-dom";

export function Appbar({ name }: { name: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 lg:px-10 lg:py-6 items-center mb-5">
      <div className="text-[#912BBC] text-lg lg:text-3xl font-semibold">
        ThoughtTrail
      </div>
      <div className="flex  gap-2 lg:gap-6 items-center">
        <button
          className="py-0 px-3 bg-green-400 rounded-lg lg:h-10 h-8"
          onClick={() => {
            navigate("/new-story");
          }}
        >
          New
        </button>
        <Avatar name={name} size="large"></Avatar>
        <button
          className="px-1 lg:px-3 bg-amber-100 rounded-lg text-md lg:text-md font-bold lg:h-10 h-8"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}
