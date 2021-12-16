import HashLoader from "react-spinners/HashLoader";
import styles from "../../styles/loading.module.scss";
const Loading: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loadingContainer}>
      <div>
        <HashLoader color={"black"} loading={true} size={50} />
      </div>
    </div>
  );
};

export default Loading;
