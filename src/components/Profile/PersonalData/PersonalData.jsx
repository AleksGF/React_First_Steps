import styles from './PersonalData.module.css';
import avatarImg from '../../../assets/images/avatar.png';
import Loader from "../../Loader/Loader";
import {ReactComponent as FacebookImg} from "../../../assets/images/facebook.svg";
import {ReactComponent as GithubImg} from "../../../assets/images/github.svg";
import {ReactComponent as InstagramImg} from "../../../assets/images/instagram.svg";
import {ReactComponent as TwitterImg} from "../../../assets/images/twitter.svg";
import {ReactComponent as VkImg} from "../../../assets/images/vk.svg";
import {ReactComponent as WebsiteImg} from "../../../assets/images/site.svg";
import {ReactComponent as YoutubeImg} from "../../../assets/images/youtube.svg";
import {Link} from "react-router-dom";
import UserStatus from "./UserStatus/UserStatus";


const PersonalData = (props) => {
  return (
    <>
    {props.isFetching ? <Loader/> : null}
    <div className={styles.personal_data_wrapper}>
      <img className={styles.avatar} src={
        props.user?.photos?.large || avatarImg
      } alt="Avatar pic"/>
      <div className={styles.personal_data}>
        <h2 className={styles.full_name}>{props.user.fullName}</h2>
        <UserStatus/>
        <p><span className={styles.colored_text}>About me: </span>{props.user?.aboutMe}</p>
        <div className={styles.contacts}>
          {!props.user?.contacts?.facebook ? null
            : <Link to={props.user.contacts.facebook}>
              <FacebookImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.github ? null
            : <Link to={props.user.contacts.github}>
              <GithubImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.instagram ? null
            : <Link to={props.user.contacts.instagram}>
              <InstagramImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.twitter ? null
            : <Link to={props.user.contacts.twitter}>
              <TwitterImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.vk ? null
            : <Link to={props.user.contacts.vk}>
              <VkImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.website ? null
            : <Link to={props.user.contacts.website}>
              <WebsiteImg className={styles.contacts_img}/>
            </Link>
          }
          {!props.user?.contacts?.youtube ? null
            : <Link to={props.user.contacts.youtube}>
              <YoutubeImg className={styles.contacts_img}/>
            </Link>
          }
        </div>
        {/*TODO Add Follow/Unfollow button*/}
        <div>Follow/Unfollow</div>
      </div>
    </div>
    </>
  );
};

export default PersonalData;