import { useState } from "react";
import { PostInput } from "@yashwanthreddy14/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Newcard() {
  const [form, setForm] = useState<PostInput>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      content: e.target.value,
    }));
  };

  const handlePublish = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/blog`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response) {
        alert("Published successfully");
      }
    } catch (error) {
      console.error("Error publishing:", error);
      alert("Couldn't publish");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <button
        className="absolute top-5 left-2 lg:top-6 lg:left-6 bg-black text-white py-2 px-2 rounded-lg"
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Back
      </button>
      <div className="flex flex-col gap-3 w-full lg:w-[65%] p-2">
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            id="large-input"
            className="block w-full p-2 lg:p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-bold"
            placeholder="Title"
            onChange={handleTitleChange}
            value={form.title}
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Story
        </label>
        <textarea
          id="message"
          rows={12}
          className="block p-1 lg:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={handleContentChange}
          value={form.content}
        ></textarea>
        <button
          type="button"
          onClick={handlePublish}
          className="bg-green-400 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
