import DialogueItem from "./DialogueItem/DialogueItem";
import MessageItem from "./MessageItrm/MessageItem";
import styles from "./Dialogues.module.css";


const Dialogues = (props) => {
  const dialoguesElements = props.state.dialogues.map(
    dialogue => <DialogueItem
      key={dialogue.id}
      id={dialogue.id}
      name={dialogue.name}
      avatar={dialogue.avatar}
    />
  );

  const findName = id => props.state.dialogues.find(el => el.id === id).name;

  const messagesElements = props.state.messages
    .sort((messageA, messageB) => (new Date(messageA.date) - new Date(messageB.date)))
    .map(
    message => <MessageItem
      key={Math.random()}
      authorName={message.authorId === 0 ? "Me" : findName(message.authorId)}
      date={message.date}
      messageText={message.message}
    />
  );

  return (
    <div className={styles.dialoguesWrapper}>
      <div className={styles.dialogues}>
        {dialoguesElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogues;