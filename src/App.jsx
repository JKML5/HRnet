import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';
import './css/style.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
