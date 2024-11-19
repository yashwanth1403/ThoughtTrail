import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

// Define Blog interface
interface Blog {
  id: string;
  author: { name: string };
  createdAt: string;
  title: string;
  content: string;
}

export function useBlogs() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]); // Type the blogs state as Blog[]

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setBlogs(response.data); // Assuming response.data is an array of Blog objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return { blogs, loading };
}
