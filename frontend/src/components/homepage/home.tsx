import Navbar from "../navbar/navbar";
import styles from "../../styles/home.module.scss";
const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className={styles.homePageContainer}>Hello</div>
    </>
  );
};

export default Home;
