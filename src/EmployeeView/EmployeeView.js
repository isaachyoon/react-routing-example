import React from 'react';
import './EmployeeView.css';
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer';

class EmployeeView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      employees: props.store.employees,
      counter: 100,
    }
  }

  hireEmployee = (info) => {
    const newEmployee = {
      id: this.state.counter + 1,
      name: 'employee',
      title: 'tbd',
      team: 'unassigned',
    }

    this.setState({
      employees: [...this.state.employees, newEmployee]
    })
  }

  fireEmployee = (id) => {
    const newState = this.state.employees.filter((employee) => 
      employee.id !== id
    )
    this.setState({
      employees: newState
    })
  }

  render() {
    return (
      <div className="EmployeeView">
        <EmployeeContainer 
          {...this.props}
          employees = {this.state.employees} 
          hireEmployee={this.hireEmployee}
          fireEmployee={this.fireEmployee}
        />
      </div>
    );
  }
}

export default EmployeeView;
