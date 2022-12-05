import styles from './Button.module.css';

const Button = ({btnText, className, ...props}) => {
  return (
    <button {...props} className={className + ' ' + styles.btnItem}>{btnText}</button>
  );
};

export default Button;