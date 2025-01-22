import { Card } from 'entities/Card/Card';
import { user } from 'helpers/posts/user';
import { Content } from 'widgets/Content/ui/Content';
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import { fetchPosts } from 'api/postService';

export const MainPage = () => {
  // const dispatch  =  useDispatch();
  // const { posts } = useSelector((state)  =>  state.posts);

  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <main>
      <Content>
        {user.map((userData) => (
          <Card key={userData.id} user={userData} />
        ))}
      </Content>
    </main>
  );
}
