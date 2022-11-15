import loaderImg from '../../assets/images/loading.svg';
import styles from './Loder.module.css';

const Loader = () => {
  return (
    <>
  <img className={styles.loader} src={loaderImg} alt={'Loading. Please, wait...'}/>
  </>)
};

export default Loader;