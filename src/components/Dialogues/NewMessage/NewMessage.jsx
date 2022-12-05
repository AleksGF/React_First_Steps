import styles from "./NewMessage.module.css";
import {Form, Field} from 'react-final-form';
import {composeValidators, maxLength, minLength, required} from "../../../helpers/getValidator";
import Textarea from "../../common/Textarea/Textarea";
import Button from "../../common/Button/Button";


const NewMessage = (props) => {
  const onSubmit = async values => {
    props.sendMessage(values.newMessageText, props.dialogueId);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={
        ({handleSubmit, form, submitting, pristine, invalid}) => (
          <form
            onSubmit={event => {
              handleSubmit(event).then(form.reset());
            }}
            className={styles.message}>
            <Field
              name={'newMessageText'}
              className={styles.message_text}
              validate={composeValidators(
                required('New Post'),
                minLength(2, 'Message'),
                maxLength(150, 'Message')
              )}
              component={Textarea}
            />
            <Button
              btnText={'Send message'}
              className={styles.send_message}
              disabled={submitting || pristine || invalid}
            />
          </form>
        )
      }
    />
  );
};

export default NewMessage;