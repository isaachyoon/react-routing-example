import React from 'react';
import './EmployeeContainer.css';
import Employee from '../Employee/Employee';

function EmployeeContainer(props) {
  let employees = props.employees.map((employeeData, i) => 
    <Employee 
      {...props}
      data={employeeData} 
      key={i}
      fireEmployee = {props.fireEmployee}
    />
  )

  return (
    <div className="container">
      <div>Current Employee Count {props.employees.length}</div>
      <button onClick={props.hireEmployee}>Hire Employee</button>
      <div className="employees-container">
        {employees}
      </div>
    </div>
  );
}

EmployeeContainer.defaultProps = {
  employees: {},
  hireEmployee: () => {},
  fireEmployee: () => {}
}

export default EmployeeContainer;
