import { connect } from 'react-redux';
import { fetchStaffList } from 'store/actions/fetchStaffList';

import { StaffListPage } from 'pages/StaffListPage/StaffListPage';

const mapState = ({ staffList }) => ({
  staffList: staffList.staffList,
});

const mapDispatch = {
  fetchStaffList,
};

export const StaffListPageContainer = connect(
  mapState,
  mapDispatch,
)(StaffListPage);
