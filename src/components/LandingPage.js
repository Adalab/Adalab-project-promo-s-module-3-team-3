import { Link } from 'react-router-dom';
import objectToExport from '../services/LocalStorage';
import '../styles/layouts/LandingPage.scss'

const LandingPage = () => {
  return (
    <main className='landingPage'>
      <h1 className='landingPage__title'>Proyectos y ya estaría</h1>
      <h2 className='landingPage__subtitle'>Escaparate en línea para recoger ideas a través de la tecnología</h2>
      <Link to="/CreateProject"><button className='landingPage__newBtn'>NUEVO PROYECTO</button> </Link>
      <button>VER PROYECTOS</button>  
    </main>
  );
};

export default LandingPage;
