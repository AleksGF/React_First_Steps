import NewPost from "./NewPost/NewPost";
import styles from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
  const postsElements = props.posts
    .sort(
      (postA, postB) => postB.post.date > postA.post.date ? 1 : -1
    )
    .map(
      post => <PostItem key={post.id} author={post.author} post={post.post}/>
    );

  return (
    <div className={styles.post_wrapper}>
      <NewPost addNewPost={props.addNewPost}
      />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default Posts;