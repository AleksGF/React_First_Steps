import {changeMessageBodyCreator, sendMessageCreator} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogues: state.dialoguesPage.dialogues,
    messages: state.dialoguesPage.messages,
    textareaText: state.dialoguesPage.textareaText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (newText) => {dispatch(changeMessageBodyCreator(newText))},
    onSendMessage: (dialogueId) => {dispatch(sendMessageCreator(dialogueId))},
  };
};
// TODO Change connect for hooks
const DialoguesContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogues));

export default DialoguesContainer;