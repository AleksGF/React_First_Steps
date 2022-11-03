import DialogueItem from "./DialogueItem";
import MessageItem from "./MessageItem";
import styles from "./Dialogues.module.css";


const Dialogues = () => {
    return (
        <div className={styles.dialoguesWrapper}>
            <div className={styles.dialogues}>
                <DialogueItem id={'1'} name={'Freind #1'}/>
                <DialogueItem id={'2'} name={'Freind #2'}/>
                <DialogueItem id={'3'} name={'Freind #3'}/>
                <DialogueItem id={'4'} name={'Freind #4'}/>
                <DialogueItem id={'5'} name={'Freind #5'}/>
                <DialogueItem id={'6'} name={'Freind #6'}/>
                <DialogueItem id={'7'} name={'Freind #7'}/>
                <DialogueItem id={'8'} name={'Freind #8'}/>
                <DialogueItem id={'9'} name={'Freind #9'}/>
            </div>
            <div className={styles.messages}>
                <MessageItem authorName={'Freind'} messageText={'Some very interesting text'}/>
                <MessageItem authorName={'Me'} messageText={':-)'}/>
                <MessageItem authorName={'Freind'} messageText={'Something interesting too'}/>
                <MessageItem authorName={'Me'} messageText={'Very very very'}/>
                <MessageItem authorName={'Freind'} messageText={'Another reply'}/>
                <MessageItem authorName={'Me'} messageText={'Good bie!'}/>
            </div>
        </div>
    )
};

export default Dialogues;