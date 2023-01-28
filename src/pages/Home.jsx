import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';
import Button from '../components/Button';
import states from '../data/states';

function Home() {
  const [dateBirth, changeDateBirth] = useState(new Date());
  const [dateStart, changeDateStart] = useState(new Date());

  const StyledTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 2px solid #eeeee;
    margin-bottom: 20px;
  `;

  const StyledInput = styled.input`
    font-size: 16px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #000000;
    outline: none;
    border-radius: 5px;

    &.half-width {
      width: 50%;
    }

    &:focus {
      border: none;
      outline: 2px solid #4e6701;
    }
  `;

  const StyledLabel = styled.label`
    display: block;
    margin: 20px 0 10px 0;
  `;

  const StyledSelect = styled.select`
    font-size: 16px;
    height: 40px;
    border: none;
    outline: 1px solid #000000;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 0 10px;
    width: 50%;

    &:focus {
      border: none;
      outline: 2px solid #4e6701;
    }
  `;

  function saveEmployee() {
    console.log('saveEmployee');
    // const firstName = document.getElementById('first-name');
    // const lastName = document.getElementById('last-name');
    // const dateOfBirth = document.getElementById('date-of-birth');
    // const startDate = document.getElementById('start-date');
    // const department = document.getElementById('department');
    // const street = document.getElementById('street');
    // const city = document.getElementById('city');
    // const state = document.getElementById('state');
    // const zipCode = document.getElementById('zip-code');

    // const employees = JSON.parse(localStorage.getItem('employees')) || [];
    // const employee = {
    //   firstName: firstName.value,
    //   lastName: lastName.value,
    //   dateOfBirth: dateOfBirth.value,
    //   startDate: startDate.value,
    //   department: department.value,
    //   street: street.value,
    //   city: city.value,
    //   state: state.value,
    //   zipCode: zipCode.value,
    // };
    // employees.push(employee);
    // localStorage.setItem('employees', JSON.stringify(employees));
    // $('#confirmation').modal();
  }

  return (
    <>
      <main className="main">
        <StyledTitle>Create employee</StyledTitle>

        <form action="#" id="create-employee">
          <StyledLabel htmlFor="first-name">First Name</StyledLabel>
          <StyledInput type="text" id="first-name" />

          <StyledLabel htmlFor="last-name">Last Name</StyledLabel>
          <StyledInput type="text" id="last-name" />

          <StyledLabel htmlFor="date-of-birth">Date of Birth</StyledLabel>
          <DatePicker
            id="date-of-birth"
            onChange={changeDateBirth}
            value={dateBirth}
          />

          <StyledLabel htmlFor="start-date">Start Date</StyledLabel>
          <DatePicker
            id="start-date"
            onChange={changeDateStart}
            value={dateStart}
          />

          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledInput id="street" type="text" />

          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput id="city" type="text" />

          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledSelect name="state" id="state">
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </StyledSelect>

          <StyledLabel htmlFor="zip-code">Zip Code</StyledLabel>
          <StyledInput className="half-width" id="zip-code" type="number" />

          <StyledLabel htmlFor="department">Department</StyledLabel>
          <StyledSelect name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </StyledSelect>
        </form>

        <p className="alignRight">
          <Button value="Save" onClick={() => saveEmployee()} />
        </p>
      </main>

      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}

export default Home;
