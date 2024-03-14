import { Panel } from "shared/ui/Panel/Panel";
import { Title } from "shared/ui/Title";
import styles from "./Card.module.scss";
import { User } from "helpers/posts/user";

interface CardProps {
  user: User;
}

export const Card: React.FC<CardProps> = ({ user }) => {
  const { title, description, image } = user;

  return (
    <Panel className={styles.card}>
      <div className={styles.textContent}>
        <Title tag="h3">{title}</Title>
        <Title tag="span">{description}</Title>
      </div>
      <img className={styles.img} src={image} />
    </Panel>
  );
};