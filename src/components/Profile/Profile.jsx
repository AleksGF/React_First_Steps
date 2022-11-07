import HeadPicture from "./HeadPicture/HeadPicture";
import PersonalDataContainer from "./PersonalDataContainer/PersonalDataContainer";
import PostsContainer from "../Posts/PostsContainer";
import styles from "./Profile.module.css";
import {addNewPost, changeTextAreaValue} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <HeadPicture />
            <PersonalDataContainer />
            <PostsContainer posts={props.state.posts}
                            textAreaValue={props.state.textAreaValue}
                            changeTextAreaValue={props.changeTextAreaValue}
                            addNewPost={props.addNewPost}/>
        </div>
    );
};

export default Profile;