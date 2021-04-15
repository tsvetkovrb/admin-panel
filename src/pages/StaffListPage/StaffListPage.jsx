import React from 'react';

import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';

import { LoadingWrapper } from 'components/LoadingWrapper/LoadingWrapper';
import { AddUserCard } from 'components/AddUser/AddUserCard';

import './StaffListPage.scss';

export class StaffListPage extends React.Component {
  componentDidMount() {
    const { fetchStaffList, staffList } = this.props;
    if (staffList.length === 0) {
      fetchStaffList();
    }
  }

  renderStaffList = (staffList) =>
    staffList.map((employee) => (
      <EmployeeCard key={employee.id} data={employee} />
    ));

  render() {
    const { staffList, isFetching, hasError, errors } = this.props;

    return (
      <LoadingWrapper
        loading={isFetching}
        hasError={hasError}
        errorMessage={errors.message}
      >
        <div className="staff-list flex fdc">
          <div className="container">
            <h1 className="staff-list__title">Staff List:</h1>
            <div className="staff-list__content">
              {this.renderStaffList(staffList)}
              <AddUserCard />
            </div>
          </div>
        </div>
      </LoadingWrapper>
    );
  }
}
