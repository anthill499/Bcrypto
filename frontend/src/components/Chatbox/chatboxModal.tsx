import styles from "../../styles/chatbox.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
const ChatBoxModal: React.FC = (): JSX.Element => {
  return (
    <div className={styles.chatBoxModal}>
      <div className={styles.chatModalNav}>
        <CloseIcon style={{ fontSize: "large" }} />
        <MinimizeIcon style={{ fontSize: "large" }} />
      </div>
      <div className={styles.actualChatBox}></div>
    </div>
  );
};

export default ChatBoxModal;
