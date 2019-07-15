import { connect } from 'react-redux';
import { fetchEmployee } from 'store/actions/fetchEmployee';

import { EmployeePage } from 'pages/EmployeePage/EmployeePage';

const handlingError = (errorsComment, errorsEmployee) => {
  if (errorsComment.message !== undefined) {
    return errorsComment;
  }
  return errorsEmployee;
};
const hasError = (hasErrorEmployee, hasErrorComment) => hasErrorEmployee || hasErrorComment;

const mapState = ({ employee, comments }) => ({
  isLoadingEmployeeData: employee.isFetching,
  employee: employee.employee,
  isSendingComment: comments.isSending,
  hasError: hasError(employee.hasError, comments.hasError),
  error: handlingError(comments.errors, employee.errors),
});

const mapDispatch = {
  fetchEmployee,
};

export const EmployeePageContainer = connect(
  mapState,
  mapDispatch,
)(EmployeePage);
