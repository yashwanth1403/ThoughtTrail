import { useEffect } from "react";
import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    }
  });
  return (
    <>
      <div className="w-full h-screen">
        <Auth type="signin"></Auth>
      </div>
    </>
  );
}
