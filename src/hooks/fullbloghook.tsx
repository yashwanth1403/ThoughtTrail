import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
}

export const useFullBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token") || "", // Default to empty string if token is not found
          },
        });
        setBlog(response.data.post);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();

    return () => {
      setLoading(false);
      setBlog(null);
    };
  }, [id]);

  return { loading, blog };
};
