import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../components/Title';

function EmployeeList({ employees }) {
  const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  `;

  const StyledRow = styled.tr`
    border-bottom: 1px solid #ebedf3;
  `;

  const StyledTh = styled.th`
    color: #b5b5c3;
    text-transform: uppercase;
    text-align: left;
    font-weight: 700;
    padding: 15px 0;
  `;

  const StyledTd = styled.td`
    padding: 15px 0;
  `;

  return (
    <main className="main">
      <Title value="Current Employees" />

      <div id="employee-div" className="container">
        <StyledTable id="employee-table" className="display">
          <StyledRow>
            <StyledTh>First name</StyledTh>
            <StyledTh>Last name</StyledTh>
            <StyledTh>Start date</StyledTh>
            <StyledTh>Department</StyledTh>
            <StyledTh>Date of birth</StyledTh>
            <StyledTh>Street</StyledTh>
            <StyledTh>City</StyledTh>
            <StyledTh>State</StyledTh>
            <StyledTh>Zip code</StyledTh>
          </StyledRow>
          {employees.map((employee) => (
            <StyledRow>
              <StyledTd>{employee.firstName}</StyledTd>
              <StyledTd>{employee.lastName}</StyledTd>
              <StyledTd>{employee.dateStart.toLocaleString()}</StyledTd>
              <StyledTd>{employee.department}</StyledTd>
              <StyledTd>{employee.dateBirth.toLocaleString()}</StyledTd>
              <StyledTd>{employee.street}</StyledTd>
              <StyledTd>{employee.city}</StyledTd>
              <StyledTd>{employee.state}</StyledTd>
              <StyledTd>{employee.zipCode}</StyledTd>
            </StyledRow>
          ))}
        </StyledTable>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.string.isRequired,
};

export default EmployeeList;
