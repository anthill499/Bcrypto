import styles from "../../styles/chatbox.module.scss";
import { useState } from "react";
import ChatBoxModal from "./chatboxModal";
const ChatboxIcon: React.FC = (): JSX.Element => {
  const [hasNotifs, setHasNotifs] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
      <div
        className={styles.chatBoxContainer}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        {isModalOpen && <ChatBoxModal />}
        {hasNotifs && <div className={styles.notificationContainer}>1</div>}
        <div className={styles.chatBoxIcon}>
          <img
            src="https://img.icons8.com/small/50/000000/speech-bubble-with-dots.png"
            alt="messaging-icon"
          />
        </div>
      </div>
  );
};

export default ChatboxIcon;
