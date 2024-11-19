import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { FullBlog } from "./pages/FullBlog";
import Publish from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/blogs/:id" element={<FullBlog />}></Route>
          <Route path="/new-story" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
