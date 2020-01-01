import React from 'react';
import './EmployeeDetail.css';

function EmployeeDetail(props) {
  return (
    <div className="EmployeeDetail">
      Hello {props.match.params.name}!
      This is the employee detail page.
    </div>
  );
}

export default EmployeeDetail;
