import HeadPicture from "./HeadPicture";
import PersonalData from "./PersonalData";
import PostContainer from "../Posts/PostContainer";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <main className={styles.content}>
            <HeadPicture />
            <PersonalData />
            <PostContainer />
        </main>
    );
};

export default Profile;