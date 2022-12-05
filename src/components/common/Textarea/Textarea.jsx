import styles from "./Textarea.module.css";

const Textarea = ({input, meta, ...props}) => {
  return (
    <div>
      <textarea  {...input} {...props}/>
      {meta.error
        /*&& meta.submitFailed*/
        && <div className={styles.error_msg}>{meta.error}</div>}
    </div>
  );
};

export default Textarea;