import styles from "./NewPost.module.css";
import {Form, Field} from 'react-final-form';
import Textarea from "../../common/Textarea/Textarea";
import {composeValidators, maxLength, minLength, required} from "../../../helpers/getValidator";

const NewPost = (props) => {
  const onSubmit = (values) => {
    props.addNewPost(values.newPostText);
  };

  /*const getValidator = (values) => {
    const errors = {};

    if (!values.newPostText
      || values.newPostText.length < 3
      || values.newPostText.length > 300) {
      errors.newPostText = 'The length of post must be from 3 to 300 symbols!';
    }

    return errors;
  };*/


  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, submitting}) => (
        <form onSubmit={handleSubmit} className={styles.new_post}>
          <Field name={'newPostText'}
                 placeholder={'What is on your mind?'}
                 className={styles.new_post_text}
                 validate={composeValidators(
                   required('New Post'),
                   minLength(3, 'New Post'),
                   maxLength(300, 'New Post')
                 )}
          >
            {props => (<Textarea {...props}/>)}
          </Field>
          {/*TODO Disable button when Validation error*/}
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