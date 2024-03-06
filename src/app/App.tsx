import { Title } from "shared/ui/Title";
import styles from "./App.module.scss";
import { IconFont } from "shared/ui/IconFont/IconFont";
import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { Content } from "widgets/Content/ui/Content";
import { Panel } from "shared/ui/Panel/Panel";

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Navbar>
          <div className={styles.navbar}>
            <Title tag="h2">Event</Title>
            <IconFont className={styles.icon} iconName="add" color="default" />
          </div>
        </Navbar>
      </div>
        <Content>
          <Panel>
            <div className={styles.card}>
              <img />
              <Title tag="h3">Заголовок</Title>
              <Title tag="span">Текс</Title>
            </div>
          </Panel>
        </Content>
    </>
  );
}