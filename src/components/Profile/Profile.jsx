import HeadPicture from "./HeadPicture/HeadPicture";
import PersonalDataContainer from "./PersonalDataContainer/PersonalDataContainer";
import PostsContainer from "../Posts/PostsContainer";
import styles from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <HeadPicture />
            <PersonalDataContainer />
            <PostsContainer posts={props.state.posts}/>
        </div>
    );
};

export default Profile;