import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { MainPage } from "pages/MainPage/MainPage";
import { Route, Routes, useParams } from "react-router-dom";
import { PostPage } from "pages/PostPage/PostPage";
import { user } from "helpers/posts/user";

function ProfilePage() {
  const {userId} = useParams();
}

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/:id" element={<PostPage user={user}/>} />
        </Route>
      </Routes>
    </>
  );
};
