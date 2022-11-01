import styles from "./Dialogues.module.css";

const Dialogues = () => {
    return (
        <div className={styles.dialoguesWrapper}>
            <div className={styles.dialogues}>
                <ul className={styles.dialogues_list}>
                    <li className={styles.dialogues_item}><a href={"/"}>Freind #1</a></li>
                    <li className={styles.dialogues_item}><a href={"/"}>Freind #2</a></li>
                    <li className={styles.dialogues_item}><a href={"/"}>Freind #3</a></li>
                </ul>
            </div>
            <div className={styles.messages}>
                <ul className={styles.messages_list}>
                    <li className={styles.messages_item}><span className={styles.message_text}>Some text</span></li>
                    <li className={styles.messages_item}><span className={styles.message_text}>Some text</span></li>
                    <li className={styles.messages_item}><span className={styles.message_text}>Some text</span></li>
                    <li className={styles.messages_item}><span className={styles.message_text}>Some text</span></li>
                    <li className={styles.messages_item}><span className={styles.message_text}>Some text</span></li>
                </ul>
            </div>
        </div>
    )
};

export default Dialogues;