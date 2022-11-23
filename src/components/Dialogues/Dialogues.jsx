import DialogueItem from "./DialogueItem/DialogueItem";
import MessageItem from "./MessageItem/MessageItem";
import styles from "./Dialogues.module.css";
import {useParams} from "react-router-dom";
import NewMessage from "./NewMessage/NewMessage";


const Dialogues = (props) => {
  let dialogueId = useParams().id;

  const dialoguesElements = props.dialogues.map(
    dialogue => <DialogueItem
      key={dialogue.id}
      id={dialogue.id}
      name={dialogue.name}
      avatar={dialogue.avatar}
    />
  );

  const filterMessages =
    message =>
      (message.authorId === Number(dialogueId)
        || message.addresseeId === Number(dialogueId)
      );

  const sortMessages =
    (messageA, messageB) =>
      (new Date(messageA.date) - new Date(messageB.date)
      );

  const findName = id => props.dialogues.find(el => el.id === id).name;

  const messagesElements = dialogueId
    ? props.messages.filter(filterMessages).sort(sortMessages)
      .map(
        message => <MessageItem
          key={Math.random()}
          authorName={message.authorId === 0 ? "Me" : findName(message.authorId)}
          date={message.date}
          messageText={message.message}
        />
      )
    : "";

  return (
    <div className={styles.dialoguesWrapper}>
      <div className={styles.dialogues}>
        {dialoguesElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        {dialogueId && <NewMessage dialogueId={dialogueId}
                                   changeMessageBody={props.changeMessageBody}
                                   sendMessage={props.sendMessage}
                                   textareaText={props.textareaText}
        />}
      </div>
    </div>
  )
};

export default Dialogues;