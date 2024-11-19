import { Welcoming } from "../components/Welcoming";
import Auth from "../components/Auth";

export function Signup() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full border-slate-400 bg-[#fffffe]">
        <Welcoming></Welcoming>
        <Auth type="signup"></Auth>
      </div>
    </>
  );
}
