import React from 'react';
import './Employee.css';

class Employee extends React.Component {
  constructor(props) {
    super(props)
  }

  goToEmployeeDetailPage = (name) => {
    this.props.history.push(`/employees/${name}`)
  }

  render() {

    return (
      <div className="Employee">
        <label>Name</label>
        <span>{this.props.data.name}</span>
        <label>Title</label>
        <span>{this.props.data.title}</span>
        <label>Team</label>
        <span>{this.props.data.team}</span>
        <button onClick={() => this.props.fireEmployee(this.props.data.id)}>Fire Employee</button>
        <button onClick={(props) => this.goToEmployeeDetailPage(this.props.data.name)}>View Detail</button>
      </div>
    );
  }
}

export default Employee;
