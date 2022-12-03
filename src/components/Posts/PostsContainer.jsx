import {addNewPost} from "../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: newPostText => {dispatch(addNewPost(newPostText))}
  };
};
// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Posts);