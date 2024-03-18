import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { MainPage } from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { PostPage } from "pages/PostPage/PostPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
};
