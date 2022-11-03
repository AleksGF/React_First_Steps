import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className={
            props.authorName === 'Me'
                ? styles.messages_item + " " + styles.ownMessage
                : styles.messages_item
        }>
            <div className={styles.author}>
                {props.authorName}
            </div>
            <div className={styles.message_text}>
                {props.messageText}
            </div>
        </div>
    );
};

export default MessageItem;