import { connect } from 'react-redux';

import { StaffCaurusel } from 'components/StaffCaurusel/StaffCaurusel';
import { fetchEmployee } from 'store/actions/fetchEmployee';
import { fetchStaffList } from 'store/actions/fetchStaffList';

const mapState = ({ staffList }) => ({
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
