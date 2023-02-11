import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';
import './css/style.css';

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} setEmployees={setEmployees} />}
        />
        <Route
          path="/employee-list"
          element={<EmployeeList employees={employees} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
