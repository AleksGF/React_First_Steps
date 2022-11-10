import NewPost from "./NewPost/NewPost";
import styles from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
  const postsElements = props.posts
    .sort(
      (postA, postB) => (new Date(postB.post.date)) - (new Date(postA.post.date))
    )
    .map(
      post => <PostItem key={post.id} author={post.author} post={post.post}/>
    );

  return (
    <div className={styles.post_wrapper}>
      <NewPost textareaText={props.textareaText}
               onChangeText={props.onChangeText}
               onAddNewPost={props.onAddNewPost}
      />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default Posts;