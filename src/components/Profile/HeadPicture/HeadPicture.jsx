import styles from "./HeadPicture.module.css";

const HeadPicture = () => {
  return (
      <div className={styles.head_picture_container}>
          <img className={styles.profile_head_picture} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Some pictureOf"/>
      </div>
  );
};

export default HeadPicture;