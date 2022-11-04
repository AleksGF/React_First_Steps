import DialogueItem from "./DialogueItem/DialogueItem";
import MessageItem from "./MessageItrm/MessageItem";
import styles from "./Dialogues.module.css";


const Dialogues = (props) => {
  const dialogues = props.dialogues.map(
    dialogue => <DialogueItem
      key={dialogue.id}
      id={dialogue.id}
      name={dialogue.name}
      avatar={dialogue.avatar}
    />
  );

  const findName = id => props.dialogues.find(el => el.id === id).name;

  const messages = props.messages
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
        {dialogues}
      </div>
      <div className={styles.messages}>
        {messages}
        {/*<MessageItem authorName={'Freind'} messageText={'Some very interesting text'}/>
        <MessageItem authorName={'Me'} messageText={':-)'}/>
        <MessageItem authorName={'Freind'} messageText={'Something interesting too'}/>
        <MessageItem authorName={'Me'} messageText={'Very very very'}/>
        <MessageItem authorName={'Freind'} messageText={'Another reply'}/>
        <MessageItem authorName={'Me'} messageText={'Good bie!'}/>*/}
      </div>
    </div>
  )
};

export default Dialogues;