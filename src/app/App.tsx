
import styles from "./App.module.scss";
import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { Content } from "widgets/Content/ui/Content";
import { Card } from "entities/Card/Card";
import { user } from "helpers/posts/user";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.app}>
        <Content>
          {
            user.map((userData) => (
              <Card key={userData.id} user={userData} />
            ))
          }
        </Content>
      </div>
    </>
  );
};
