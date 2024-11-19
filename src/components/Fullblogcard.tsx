import { Avatar } from "./Blogcard";

interface fullblog {
  title: string;
  content: string;
  name: string;
  date: string;
}

export function Fullblogcard({ title, content, name, date }: fullblog) {
  return (
    <div className="flex flex-col items-center gap-4 lg:p-10 p-2">
      <div className="flex items-center gap-3">
        <Avatar name={name} size="large" />
        <div className="font-bold  text-md lg:text-lg">{name}</div>
        <div className="text-sm">{date}</div>
      </div>
      <div className="font-bold  text-xl lg:text-3xl">{title}</div>
      <div className=" text-lg lg:text-xl">{content}</div>
    </div>
  );
}
