import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { SignupInput } from "@yashwanthreddy14/medium-common";
import axios from "axios";

export default function Auth({ type }: { type: "signin" | "signup" }) {
  const [form, setForm] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // Handle error message state
  const navigate = useNavigate();

  const sendrequest = async () => {
    const posturl = `https://backend.yashwanthmittabai.workers.dev/api/v1/user/${
      type === "signin" ? "signin" : "signup"
    }`;
    try {
      const response = await axios.post(posturl, form);
      localStorage.setItem("token", `Bearer ${response.data.jwt}`);
      navigate("/blogs");
    } catch (e) {
      setError(`Error while ${type === "signin" ? "signin" : "signup"}`); // Set error message
    }
  };

  return (
    <div
      className={`h-screen w-full ${
        type === "signin" ? "lg:w-full" : "lg:w-1/2"
      } flex items-center`}
    >
      <div
        className={`bg-slate-200 lg:h-fit ${
          type === "signin" ? "lg:w-[30%]" : "lg:w-[70%]"
        } p-4 flex flex-col gap-2 lg:gap-3 rounded-lg text-center w-full mx-auto`}
      >
        {type === "signin" && (
          <div className="lg:absolute lg:top-10 lg:left-[50%] text-4xl font-bold font-serif text-[#912BBC]">
            ThoughtTrail
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div className="text-lg lg:text-2xl font-bold">
            {type === "signup"
              ? "Create an account"
              : "Sign in to your account"}
          </div>
          <div className="flex justify-center">
            <div className="lg:text-lg font-light">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
            </div>
            <Link
              to={type === "signup" ? "/Signin" : "/Signup"}
              className="underline lg:text-lg font-light pl-1"
            >
              {type === "signup" ? "Signin" : "Signup"}
            </Link>
          </div>

          {type === "signup" && (
            <Input
              label={"Name"}
              placeholder={"Enter your Name"}
              onchange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
            />
          )}

          <Input
            label={"Email"}
            placeholder={"Enter your Email"}
            onchange={(e) => {
              setForm((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />

          <Input
            label={"Password"}
            placeholder={"Password"}
            onchange={(e) => {
              setForm((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error} {/* Show error message to the user */}
            </div>
          )}

          <Button
            text={type === "signin" ? "Sign In" : "Sign Up"}
            onclick={sendrequest}
          />
        </div>
      </div>
    </div>
  );
}
