import React from 'react';

export class EmployeePage extends React.Component {
  componentDidMount() {
    const {
      fetchEmployee,
      match: {
        params: { id },
      },
    } = this.props;
    fetchEmployee(id);
  }

  render() {
    return (
      <div>
        <h1>Employee Page</h1>
      </div>
    );
  }
}
