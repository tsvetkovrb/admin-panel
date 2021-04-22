import { connect } from 'react-redux';
import { fetchStaffList } from 'store/actions/fetchStaffList';

import { StaffListPage } from 'pages/StaffListPage/StaffListPage';
import { Person } from 'components/EmployeeCard/EmployeeCard';

const mapState = ({
  staffList,
}: {
  staffList: {
    staffList: Person[];
    isFetching: boolean;
    hasError: boolean;
    errors: string[];
  };
}) => ({
  staffList: staffList.staffList,
  isFetching: staffList.isFetching,
  hasError: staffList.hasError,
  errors: staffList.errors,
});

const mapDispatch = {
  fetchStaffList,
};

export const StaffListPageContainer = connect(
  mapState,
  mapDispatch,
)(StaffListPage);
