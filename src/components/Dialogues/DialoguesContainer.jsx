import {changeMessageBody, sendMessage} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogues: state.dialoguesPage.dialogues,
    messages: state.dialoguesPage.messages,
    textareaText: state.dialoguesPage.textareaText,
  };
};

// TODO Change connect for hooks
export default compose(
  connect(mapStateToProps, {changeMessageBody, sendMessage}),
  withAuthRedirect
)(Dialogues);