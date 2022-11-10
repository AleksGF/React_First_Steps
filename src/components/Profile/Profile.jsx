import HeadPicture from "./HeadPicture/HeadPicture";
import PersonalData from "./PersonalData/PersonalData";
import PostsContainer from "../Posts/PostsContainer";
import styles from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <HeadPicture />
            <PersonalData />
            <PostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;