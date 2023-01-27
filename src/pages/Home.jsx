import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import states from '../data/states';
import Header from '../components/Header';

function Home() {
  const [dateBirth, changeDateBirth] = useState(new Date());
  const [dateStart, changeDateStart] = useState(new Date());

  return (
    <>
      <Header />
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View current employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            onChange={changeDateBirth}
            value={dateBirth}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            onChange={changeDateStart}
            value={dateStart}
          />

          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" />
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button type="button" onClick="saveEmployee()">
          Save
        </button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}

export default Home;
