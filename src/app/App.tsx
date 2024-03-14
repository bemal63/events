
import styles from "./App.module.scss";
import { Navbar } from "widgets/Navbar/ui/Navbar/Navbar";
import { MainPage } from "pages/MainPage/MainPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.app}>
        <MainPage />
      </div>
    </>
  );
};
