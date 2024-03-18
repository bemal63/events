import { Panel } from "shared/ui/Panel/Panel";
import { Title } from "shared/ui/Title";
import styles from "./Card.module.scss";
import { User } from "helpers/posts/user";
import { Link } from "react-router-dom";

interface CardProps {
  user: User;
}

export const Card: React.FC<CardProps> = ({ user }) => {
  const { title, description, image } = user;

  return (
    <Link to={`/posts/${user.id}`}>
      <Panel className={styles.card}>
        <div className={styles.textContent}>
          <Title tag="h3">{title}</Title>
          <Title tag="span">{description}</Title>
        </div>
        <img className={styles.img} src={image} />
      </Panel>
    </Link>
  );
};
