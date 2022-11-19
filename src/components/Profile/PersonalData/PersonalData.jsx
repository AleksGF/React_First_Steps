import styles from './PersonalData.module.css';
import avatarImg from '../../../assets/images/avatar.png';
import Loader from "../../Loader/Loader";
import facebookImg from "../../../assets/images/facebook.svg";
import githubImg from "../../../assets/images/github.svg";
import instagramImg from "../../../assets/images/instagram.svg";
import twitterImg from "../../../assets/images/twitter.svg";
import vkImg from "../../../assets/images/vk.svg";
import websiteImg from "../../../assets/images/site.svg";
import youtubeImg from "../../../assets/images/youtube.svg";
import {Link} from "react-router-dom";


const PersonalData = (props) => {
  console.dir(props.user);
  return (
    <>
    {props.isFetching ? <Loader/> : null}
    <div className={styles.personal_data_wrapper}>
      <img className={styles.avatar} src={
        props.user?.photos?.large || avatarImg
      } alt="Avatar pic"/>
      <div className={styles.personal_data}>
        <h2 className={styles.full_name}>{props.user.fullName || 'Anonim Anonimenko'}</h2>
        <p><span className={styles.colored_text}>About me: </span>{props.user?.aboutMe ||
          "Lorem ipsum dolor sit amet"}</p>
        <div className={styles.contacts}>
          {!props.user?.contacts?.facebook ? null
            : <Link to={props.user.contacts.facebook}>
              <img className={styles.contacts_img} src={facebookImg} alt={'Facebook logo'}/>
            </Link>
          }
          {!props.user?.contacts?.github ? null
            : <Link to={props.user.contacts.github}>
              <img className={styles.contacts_img} src={githubImg} alt={'GitHub`s logo'}/>
            </Link>
          }
          {!props.user?.contacts?.instagram ? null
            : <Link to={props.user.contacts.instagram}>
              <img className={styles.contacts_img} src={instagramImg} alt={'Instagram`s logo'}/>
            </Link>
          }
          {!props.user?.contacts?.twitter ? null
            : <Link to={props.user.contacts.twitter}>
              <img className={styles.contacts_img} src={twitterImg} alt={'Twitter`s logo'}/>
            </Link>
          }
          {!props.user?.contacts?.vk ? null
            : <Link to={props.user.contacts.vk}>
              <img className={styles.contacts_img} src={vkImg} alt={'Vk`s logo'}/>
            </Link>
          }
          {!props.user?.contacts?.website ? null
            : <Link to={props.user.contacts.website}>
              <img className={styles.contacts_img} src={websiteImg} alt={'Website`s logo'}/>
            </Link>
          }
          {!props.user?.contacts?.youtube ? null
            : <Link to={props.user.contacts.youtube}>
              <img className={styles.contacts_img} src={youtubeImg} alt={'Youtube`s logo'}/>
            </Link>
          }
        </div>
        <div>Follow/Unfollow</div>
      </div>
    </div>
    </>
  );
};

export default PersonalData;