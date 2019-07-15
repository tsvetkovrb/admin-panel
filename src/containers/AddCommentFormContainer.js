import { connect } from 'react-redux';
import { sendComment } from 'store/actions/sendComment';
import { AddCommentForm } from 'components/Forms/AddCommentForm/AddCommentForm';

const mapState = ({ comments }) => ({
  hasError: comments.hasError,
});

const mapDispatch = {
  sendComment,
};

export const AddCommentFormContainer = connect(
  mapState,
  mapDispatch,
)(AddCommentForm);
