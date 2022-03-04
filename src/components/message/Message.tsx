import moment from "moment";
import type { FC } from "react";
import type { Message as MessageType } from "types/Message";
import styles from "./message.module.css";

interface MessageProps {
  message: MessageType;
  own: boolean;
}

export const Message: FC<MessageProps> = ({ message, own }) => {
  return (
    <div
      className={own ? `${styles.message} ${styles.own}` : `${styles.message}`}
    >
      <div className={styles.messageTop}>
        <img
          className={styles.messageImg}
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className={styles.messageText}>{message.text}</p>
      </div>
      <div className={styles.messageBottom}>
        {moment().startOf(message.createdAt).fromNow()}
      </div>
    </div>
  );
};
