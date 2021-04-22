import { connect } from 'react-redux';

import { StaffCaurusel } from 'components/StaffCaurusel/StaffCaurusel';
import { fetchEmployee } from 'store/actions/fetchEmployee';
import { fetchStaffList } from 'store/actions/fetchStaffList';
import { Person } from 'components/EmployeeCard/EmployeeCard';

const mapState = ({ staffList }: { staffList: { staffList: Person[] } }) => ({
  staffList: staffList.staffList,
});

const mapDispatch = {
  fetchEmployee,
  fetchStaffList,
};

export const StaffCauruselContainer = connect(
  mapState,
  mapDispatch,
)(StaffCaurusel);
