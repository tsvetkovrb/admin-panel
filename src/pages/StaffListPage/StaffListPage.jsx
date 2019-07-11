import React from 'react';

import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';

import './StaffListPage.scss';

export class StaffListPage extends React.Component {
  componentDidMount() {
    const { fetchStaffList, staffList } = this.props;
    if (staffList.length === 0) {
      fetchStaffList();
    }
  }

  renderStaffList = staffList => (
    staffList.map(employee => <EmployeeCard key={employee.id} data={employee} />)
  );

  render() {
    const { staffList } = this.props;
    return (
      <div className='staff-list flex fdc'>
        <div className='container'>
          <h1 className='staff-list__title'>Staff List:</h1>
          <div className='flex fww'>{this.renderStaffList(staffList)}</div>
        </div>
      </div>
    );
  }
}
