import { Link } from 'react-router-dom';
import objectToExport from '../services/LocalStorage';
const LandingPage = () => {
  return (
    <main>
      <h1>Proyectos y ya estaría</h1>
      <h2>Escaparate en línea para recoger ideas a través de la tecnología</h2>
      <Link to="/CreateProject"><button>NUEVO PROYECTO</button> </Link>
      <button>VER PROYECTOS</button>  
    </main>
  );
};

export default LandingPage;
