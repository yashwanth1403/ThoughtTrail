import { Link } from "react-router-dom";

interface blogcard {
  name: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

export default function Blogcard({ name, title, content, date, id }: blogcard) {
  return (
    <Link to={`${id}`}>
      <div className="flex flex-col gap-2 w-screen max-w-screen-sm p-3 lg:w-screen lg:max-w-screen-md lg:p-2 border-b border-slate-200">
        <div className="flex gap-2 items-center">
          <Avatar name={name} size="small"></Avatar>
          <div className="text-sm lg:text-lg font-semibold">{name}</div>
          <div className="text-sm lg:text-md">{date}</div>
        </div>
        <div className="text-md lg:text-2xl font-bold">{title}</div>
        <div className="text-sm lg:text-lg cursor-pointer">
          {content.slice(0, 100)}....
        </div>
        <div className="text-md font-light mt-3">
          {Math.ceil(content.length / 100)} min read
        </div>
      </div>
    </Link>
  );
}

export function Avatar({
  name,
  size,
}: {
  name: string;
  size: "small" | "large";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-7 h-7" : "w-14 h-14"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-700`}
    >
      <span className=" text-gray-600 dark:text-gray-300 font-bold">
        {name[0]}
      </span>
    </div>
  );
}
