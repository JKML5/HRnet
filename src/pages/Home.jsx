import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import FormDatePicker from '../components/FormDatePicker';
import FormInputText from '../components/FormInput';
import FormLabel from '../components/FormLabel';
import FormSelect from '../components/FormSelect';
import states from '../data/states';
import departments from '../data/departments';
import Title from '../components/Title';
import Modal from '../components/Modal';

function Home({ employees, setEmployees }) {
  const [dateBirth, changeDateBirth] = useState(new Date());
  const [dateStart, changeDateStart] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function saveEmployee() {
    const employee = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      dateBirth,
      dateStart,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zip-code').value,
      department: document.getElementById('department').value,
    };

    setEmployees([...employees, employee]);

    // Confirmation message
    handleOpenModal();
  }

  return (
    <>
      <main className="main">
        <Title value="Create employee" />

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
          <FormSelect name="state" id="state" data={states} />

          <FormLabel htmlFor="zip-code" value="Zip Code" />
          <FormInputText id="zip-code" className="half-width" type="number" />

          <FormLabel htmlFor="department" value="Department" />
          <FormSelect name="department" id="department" data={departments} />
        </form>

        <p className="alignRight">
          <Button value="Save" onClick={() => saveEmployee()} />
        </p>
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
  employees: PropTypes.string.isRequired,
  setEmployees: PropTypes.func.isRequired,
};

export default Home;
