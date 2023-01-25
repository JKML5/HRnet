import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to="/employee-list">View current employees</Link>
    </>
  );
}

export default Home;
