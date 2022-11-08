import React from "react";
import {changeMessageBodyCreator, sendMessageCreator} from "../../../redux/dialoguesReducer";
import styles from "./NewMessage.module.css";

const NewMessage = (props) => {
  const onChangeText = (newText) => {
    const action = changeMessageBodyCreator(newText);
    props.dispatch(action);
  };

  const onSendMessage = (dialogueId) => {
    const action = sendMessageCreator(dialogueId);
    props.dispatch(action);
  };

  return (
    <div className={styles.message}>
            <textarea className={styles.message_text}
                      value={props.textareaText}
                      onChange={(event) => onChangeText(event.currentTarget.value)}
            />
      <button className={styles.send_message} onClick={() => onSendMessage(props.dialogueId)}>Send message</button>
    </div>
  );
};

export default NewMessage;