import loaderImg from '../../assets/images/loading.svg';
import styles from './Loder.module.css';

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loaderImg} alt={'Loading. Please, wait...'}/>
    </div>)
};

export default Loader;