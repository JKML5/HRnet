import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSelect from 'jk-oc-form-select/dist/FormSelect';
import Button from '../components/Button';
import FormDatePicker from '../components/FormDatePicker';
import FormInputText from '../components/FormInput';
import FormLabel from '../components/FormLabel';
import states from '../data/states';
import departments from '../data/departments';
import Title from '../components/Title';
import Modal from '../components/Modal';

function Home({ employees, setEmployees }) {
  const [formError, setFormError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateBirth, changeDateBirth] = useState(new Date());
  const [dateStart, changeDateStart] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, changeState] = useState('');
  const [zipCode, changeZipCode] = useState('');
  const [department, changeDepartment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function saveEmployee(event) {
    event.preventDefault();

    if (!firstName) {
      setFormError('Please enter a first name');
      return;
    }

    if (!lastName) {
      setFormError('Please enter a last name');
      return;
    }

    if (!street) {
      setFormError('Please enter a street address');
      return;
    }

    if (!city) {
      setFormError('Please enter a city');
      return;
    }

    if (!state) {
      setFormError('Please select a state');
    }

    if (!zipCode) {
      setFormError('Please enter a zip code');
    }

    if (!department) {
      setFormError('Please select a department');
    }

    const employee = {
      firstName,
      lastName,
      dateBirth,
      dateStart,
      street,
      city,
      state,
      zipCode,
      department,
    };

    setEmployees([...employees, employee]);

    // Confirmation message
    handleOpenModal();
  }

  return (
    <>
      <main className="main">
        <Title value="Create employee" />

        <form id="create-employee" onSubmit={saveEmployee}>
          <FormLabel htmlFor="firstName" value="First Name" />
          <FormInputText
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

          <FormLabel htmlFor="last-name" value="Last Name" />
          <FormInputText
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

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
          <FormInputText
            id="street"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />

          <FormLabel htmlFor="city" value="City" />
          <FormInputText
            id="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <FormLabel htmlFor="state" value="State" />
          <FormSelect
            name="state"
            id="state"
            data={states}
            onChange={changeState}
            value={state}
          />

          <FormLabel htmlFor="zip-code" value="Zip Code" />
          <FormInputText
            id="zip-code"
            className="half-width"
            type="number"
            onChange={changeZipCode}
            value={zipCode}
          />

          <FormLabel htmlFor="department" value="Department" />
          <FormSelect
            name="department"
            id="department"
            data={departments}
            onChange={changeDepartment}
            value={department}
          />

          {formError && <p className="error">{formError}</p>}

          <p className="alignRight">
            <Button value="Save" />
          </p>
        </form>
      </main>

      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Employee Created!"
        />
      </div>
    </>
  );
}

Home.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.string).isRequired,
  setEmployees: PropTypes.func.isRequired,
};

export default Home;
