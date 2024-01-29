

import { Title } from "shared/ui/Title";
import styles from "./App.module.scss";
import { IconFont } from "shared/ui/IconFont/IconFont";

export const App = () => {
  return (
    <div className={styles.app}>
      <Title tag="h2" center>
        Event
      </Title>
      <IconFont className={styles.icon} iconName="download" color="warn"/>
    </div>
  );
}