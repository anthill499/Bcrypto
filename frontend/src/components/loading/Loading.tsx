import HashLoader from "react-spinners/HashLoader";
import styles from "../../styles/loading.module.scss";
const Loading: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loadingContainer}>
      <HashLoader color={"black"} loading={true} size={100} />
    </div>
  );
};

export default Loading;
