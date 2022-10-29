import HeadPicture from "./HeadPicture";
import PersonalData from "./PersonalData";
import PostContainer from "./PostContainer";

const Profile = () => {
    return (
        <main className="content">
            <HeadPicture />
            <PersonalData />
            <PostContainer />
        </main>
    );
};

export default Profile;