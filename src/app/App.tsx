import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { MainPage } from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { PostPage } from "pages/PostPage/PostPage";
import { user } from "helpers/posts/user";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostPage user={user[1]}/>}/>
      </Routes>
    </>
  );
};
