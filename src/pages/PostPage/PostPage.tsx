import { User } from "helpers/posts/user";
import React from "react";
import { Title } from "shared/ui/Title";
import styles from "./PostPage.module.scss";

interface PostPageProps {
  user: User;
}

export const PostPage: React.FC<PostPageProps> = ({ user }) => {
  const { title, image, posts } = user;

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
