import { user } from "helpers/posts/user";
import React from "react";
import { Title } from "shared/ui/Title";
import styles from "./PostPage.module.scss";
import { useParams } from "react-router-dom";

// interface PostPageProps {
//   user: User;
// }

export const PostPage: React.FC = () => {
  const postId = useParams().id;

  const currentUser = user.find((post) => post.id === Number(postId));

  if (!currentUser) {
    return <>404</>
  }

  const { title, image, posts } = currentUser;

  return (
    <div className={styles.content}>
      <img className={styles.img} src={image} />
      <div className={styles.text}>
        <Title center tag="h3">
          {title}
        </Title>
        <Title tag="span">{posts}</Title>
      </div>
    </div>
  );
};
