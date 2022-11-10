import styles from "./NewMessage.module.css";

const NewMessage = (props) => {
  return (
    <div className={styles.message}>
      <textarea className={styles.message_text}
                value={props.textareaText}
                onChange={(event) => props.onChangeText(event.currentTarget.value)}
      />
      <button
        className={styles.send_message}
        onClick={() => props.onSendMessage(props.dialogueId)}
      >Send message
      </button>
    </div>);
};

export default NewMessage;