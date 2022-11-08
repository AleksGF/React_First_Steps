import styles from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
  return (
    <div className={styles.dialogues_item}>
      <NavLink
        to={`/dialogues/${props.id}`}
        className={({isActive}) =>
          isActive
            ? styles.active + " " + styles.dialogues_item_link
            : styles.dialogues_item_link
        }>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogueItem;