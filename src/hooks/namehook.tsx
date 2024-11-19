import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

export const useName = () => {
  const [name, setName] = useState("Anonymous");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token")?.split(" ")[1];

    if (!token) {
      setError("No token found");
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode<CustomJwtPayload>(token);

      // Fetch user data once token is decoded
      axios
        .get(`${BACKEND_URL}/user/${decoded.id}`)
        .then((response) => {
          setName(response.data.user.name);
        })
        .catch((err) => {
          setError("Failed to fetch user data");
          console.error(err);
        })
        .finally(() => setLoading(false));
    } catch (err) {
      setError("Invalid token");
      setLoading(false);
      console.error(err);
    }
  }, []);
  return { name, loading, error };
};
