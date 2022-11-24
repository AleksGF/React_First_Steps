import {changeTextareaTextCreator, addNewPostCreator} from "../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";

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
// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Posts);