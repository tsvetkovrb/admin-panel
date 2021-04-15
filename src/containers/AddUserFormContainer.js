import { connect } from 'react-redux';
import { addUser as addEmployee } from 'store/actions/addUser';

import { AddUserForm } from 'components/Forms/AddUserForm';

const mapState = ({ addUser }) => ({
  isSending: addUser.isSending,
  hasError: addUser.hasError,
  errors: addUser.errors,
});

const mapDispatch = {
  addEmployee,
};

export const AddUserFormContainer = connect(mapState, mapDispatch)(AddUserForm);
