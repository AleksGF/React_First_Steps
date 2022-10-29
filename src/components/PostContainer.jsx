import NewPost from "./NewPost";
import Posts from "./Posts";

const PostContainer = () => {
    return (
        <div className="post-container">
            <NewPost />
            <Posts />
        </div>
    );
};

export default PostContainer;