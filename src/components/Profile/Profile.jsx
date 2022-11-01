import HeadPicture from "./HeadPicture";
import PersonalData from "./PersonalData";
import PostsContainer from "../Posts/PostsContainer";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <HeadPicture />
            <PersonalData />
            <PostsContainer />
        </div>
    );
};

export default Profile;