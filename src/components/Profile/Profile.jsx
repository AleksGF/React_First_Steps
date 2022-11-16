import HeadPicture from "./HeadPicture/HeadPicture";
import PersonalDataContainer from "./PersonalData/PersonalDataContainer";
import PostsContainer from "../Posts/PostsContainer";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <HeadPicture />
            <PersonalDataContainer />
            <PostsContainer/>
        </div>
    );
};

export default Profile;