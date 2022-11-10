import {changeTextareaTextCreator, addNewPostCreator} from "../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    textareaText: state.profilePage.textareaText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (newValue) => {dispatch(changeTextareaTextCreator(newValue))},
    onAddNewPost: () => {dispatch(addNewPostCreator())},
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;