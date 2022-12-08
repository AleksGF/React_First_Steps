import {Navigate, useLocation} from "react-router-dom";
import {Form, Field} from "react-final-form";
import styles from './Login.module.css';
import {FORM_ERROR} from "final-form";
import Button from "../common/Button/Button";

const Login = (props) => {
  const location = useLocation();

  const onSubmit = async values => {
    let {email, password, rememberMe} = values;
    let errors = await props.login(email, password, rememberMe);

    return {[FORM_ERROR]: errors};
  };

  const getValidator = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required!'
    }
    if (!values.password) {
      errors.password = 'Password is required!'
    }
    return errors;
  };

  if (props.isAuth) {
    const path = location.state?.from?.pathname ? location.state?.from?.pathname : '/';

    return (
      <Navigate to={path}/>
    );
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={getValidator}
      render={({
                 submitError,
                 handleSubmit,
                 submitting,
                 pristine,
                 invalid,
                 modifiedSinceLastSubmit,
                 submitSucceeded
               }) => (
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <Field name={'email'}>
            {({input, meta}) => (
              <div>
                <label>Email</label>
                <input {...input} type={'text'}/>
                {meta.error && meta.touched && <div className={styles.error_msg}>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name={'password'}>
            {({input, meta}) => (
              <div>
                <label>Password</label>
                <input {...input} type={'password'}/>
                {meta.error && meta.touched && <div className={styles.error_msg}>{meta.error}</div>}
              </div>)}
          </Field>
          <Field name={'rememberMe'} type={'checkbox'} defaultValue={true}>
            {({input}) => (
              <div>
                <label>Remember me</label>
                <input {...input}/>
              </div>
            )}
          </Field>
          {submitError && <div className={styles.error_msg}>{submitError}</div>}
          <div>
            <Button
              btnText={'Login'}
              type={'submit'}
              className={styles.login_button}
              disabled={submitting || pristine || (invalid && !modifiedSinceLastSubmit)}
            />
          </div>
          <p>You came from: {location.state?.from?.pathname || '/'}</p>
        </form>
      )
      }
    />
  );
};

export default Login;