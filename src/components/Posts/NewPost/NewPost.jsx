import styles from "./NewPost.module.css";
import {Form, Field} from 'react-final-form';

const NewPost = (props) => {
  //TODO refactor function onAddNewPost
  const onSubmit = (values) => {
    props.onAddNewPost(values.newPostText);
  };

  const getValidator = (values) => {
    const errors = {};

    if (!values.newPostText
      || values.newPostText.length < 3
      || values.newPostText.length > 300) {
      errors.newPostText = 'The length of post must be from 3 to 300 symbols!';
    }

    return errors;
  };


  return (
    /*<div className={styles.new_post}>
            <textarea className={styles.new_post_text}
                      value={props.textareaText}
                      onChange={(event) => props.onChangeText(event.currentTarget.value)}
            />
      <button className={styles.new_post_submit} onClick={props.onAddNewPost}>Send new post</button>
    </div>*/
    <Form
      onSubmit={onSubmit}
      validate={getValidator}
      render={({handleSubmit, submitting}) => (
        <form onSubmit={handleSubmit} className={styles.new_post}>
          <Field name={'newPostText'}>
            {({input, meta}) => (
              <div>
                <textarea {...input} className={styles.new_post_text}/>
                {meta.error && meta.submitFailed && <div className={styles.error_msg}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <button className={styles.new_post_submit}
                  disabled={submitting}
          >Send new post
          </button>
        </form>
      )}
    />
  );
};

export default NewPost;