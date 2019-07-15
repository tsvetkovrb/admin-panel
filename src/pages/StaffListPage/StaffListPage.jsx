import React from 'react';

import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';

import './StaffListPage.scss';
import { LoadingWrapper } from 'components/LoadingWrapper/LoadingWrapper';

export class StaffListPage extends React.Component {
  componentDidMount() {
    const { fetchStaffList, staffList } = this.props;
    if (staffList.length === 0) {
      fetchStaffList();
    }
  }

  renderStaffList = staffList => staffList.map(employee => (
    <EmployeeCard key={employee.id} data={employee} />
  ));

  render() {
    const {
      staffList, isFetching, hasError, errors,
    } = this.props;

    return (
      <LoadingWrapper
        loading={isFetching}
        hasError={hasError}
        errorMessage={errors.message}
      >
        <div className='staff-list flex fdc'>
          <div className='container'>
            <h1 className='staff-list__title'>Staff List:</h1>
            <div className='staff-list__content'>
              {this.renderStaffList(staffList)}
            </div>
          </div>
        </div>
      </LoadingWrapper>
    );
  }
}
