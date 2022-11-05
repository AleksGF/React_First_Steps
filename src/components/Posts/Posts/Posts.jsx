import PostItem from "./PostItem/PostItem";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const postsElements = props.posts
    .sort(
      (postA, postB) => (new Date(postB.post.date)) - (new Date(postA.post.date))
    )
    .map(
    post => <PostItem key={post.id} author={post.author} post={post.post}/>
    );

  return (
    <div className={styles.posts}>
      {postsElements}
    </div>
  );
};

export default Posts;