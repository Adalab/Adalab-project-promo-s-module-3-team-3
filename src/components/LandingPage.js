import { Link } from 'react-router-dom';
import objectToExport from '../services/LocalStorage';
const LandingPage = () => {
  return (
    <>
      <p>Esta es la Landingpage</p>
      <Link to="/CreateProject">Create Project </Link>
    </>
  );
};

export default LandingPage;
