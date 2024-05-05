import {Navbar} from "widgets/Navbar/ui/Navbar/Navbar";
import {MainPage} from "pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import {PostPage} from "pages/PostPage/PostPage";
import {CreatePostPage} from "pages/CreatePostPage/CreatePostPage.tsx";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePostPage />} />
        </Route>
      </Routes>
    </>
  );
};
