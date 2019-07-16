import { connect } from 'react-redux';
import { fetchStaffList } from 'store/actions/fetchStaffList';

import { StaffListPage } from 'pages/StaffListPage/StaffListPage';

const mapState = ({ staffList }) => ({
  staffList: staffList.staffList,
  isFetching: staffList.isFetching,
  hasError: staffList.hasError,
  errors: staffList.errors,
});

const mapDispatch = {
  fetchStaffList,
};

export default connect(
  mapState,
  mapDispatch,
)(StaffListPage);
