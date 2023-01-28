import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import FormDatePicker from '../components/FormDatePicker';
import FormInputText from '../components/FormInput';
import FormLabel from '../components/FormLabel';
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
          <FormLabel htmlFor="first-name" value="First Name" />
          <FormInputText id="first-name" />

          <FormLabel htmlFor="first-name" value="Last Name" />
          <FormInputText id="last-name" />

          <FormLabel htmlFor="date-of-birth" value="Date of Birth" />
          <FormDatePicker
            id="date-of-birth"
            onChange={changeDateBirth}
            value={dateBirth}
          />

          <FormLabel htmlFor="start-date" value="Start Date" />
          <FormDatePicker
            id="start-date"
            onChange={changeDateStart}
            value={dateStart}
          />

          <FormLabel htmlFor="street" value="Street" />
          <FormInputText id="street" />

          <FormLabel htmlFor="city" value="City" />
          <FormInputText id="city" />

          <FormLabel htmlFor="state" value="State" />
          <StyledSelect name="state" id="state">
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </StyledSelect>

          <FormLabel htmlFor="zip-code" value="Zip Code" />
          <FormInputText id="zip-code" className="half-width" type="number" />

          <FormLabel htmlFor="department" value="Department" />
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
