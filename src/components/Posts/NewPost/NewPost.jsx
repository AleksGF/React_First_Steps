import styles from "./NewPost.module.css";
import {Form, Field} from 'react-final-form';
import Textarea from "../../common/Textarea/Textarea";
import {composeValidators, maxLength, minLength, required} from "../../../helpers/getValidator";
import Button from "../../common/Button/Button";

const NewPost = (props) => {
  const onSubmit = async values => {
    props.addNewPost(values.newPostText);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, form, submitting, pristine, invalid}) => (
        <form
          onSubmit={event => {
            handleSubmit(event).then(form.reset());
          }}
          className={styles.new_post}>
          <Field name={'newPostText'}
                 placeholder={'What is on your mind?'}
                 className={styles.new_post_text}
                 validate={composeValidators(
                   required('New Post'),
                   minLength(3, 'New Post'),
                   maxLength(300, 'New Post')
                 )}
                 component={Textarea}
          />
          <Button btnText={'Send new post'}
                  className={styles.new_post_submit}
                  disabled={submitting || pristine || invalid}
          />
        </form>
      )}
    />
  );
};

export default NewPost;