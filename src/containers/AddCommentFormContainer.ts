import { connect } from 'react-redux';
import { sendComment } from 'store/actions/sendComment';
import { AddCommentForm } from 'components/Forms/AddCommentForm';

const mapState = ({ comments }: any) => ({
  hasError: comments.hasError,
});

const mapDispatch = {
  sendComment,
};

export const AddCommentFormContainer = connect(
  mapState,
  mapDispatch,
)(AddCommentForm);
