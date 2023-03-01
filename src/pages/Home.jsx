import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormSelect from 'jk-oc-form-select/dist/FormSelect';
import Button from '../components/Button';
import FormDatePicker from '../components/FormDatePicker';
import FormInputText from '../components/FormInput';
import FormLabel from '../components/FormLabel';
import states from '../data/states';
import departments from '../data/departments';
import Title from '../components/Title';
import Modal from '../components/Modal';
import { addEmployee } from '../store';

function Home() {
  const dispatch = useDispatch();

  const [formError, setFormError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateBirth, setDateBirth] = useState(new Date());
  const [dateStart, setDateStart] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
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
      return;
    }

    if (!zipCode) {
      setFormError('Please enter a zip code');
      return;
    }

    if (!department) {
      setFormError('Please select a department');
      return;
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

    // Add employee to the list
    dispatch(addEmployee(employee));

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

          <FormLabel htmlFor="lastName" value="Last Name" />
          <FormInputText
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

          <FormLabel htmlFor="dateBirth" value="Date of Birth" />
          <FormDatePicker
            id="dateBirth"
            name="dateBirth"
            onChange={setDateBirth}
            value={dateBirth}
          />

          <FormLabel htmlFor="startDate" value="Start Date" />
          <FormDatePicker
            id="startDate"
            onChange={setDateStart}
            value={dateStart}
          />

          <FormLabel htmlFor="street" value="Street" />
          <FormInputText
            id="street"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />

          <FormLabel htmlFor="city" value="City" />
          <FormInputText
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <FormLabel htmlFor="state" value="State" />
          <FormSelect
            id="state"
            name="state"
            data={states}
            onChange={(e) => setState(e.target.value)}
            value={state}
          />

          <FormLabel htmlFor="zipCode" value="Zip Code" />
          <FormInputText
            id="zipCode"
            name="zipCode"
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />

          <FormLabel htmlFor="department" value="Department" />
          <FormSelect
            id="department"
            name="department"
            data={departments}
            onChange={(e) => setDepartment(e.target.value)}
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

export default Home;
