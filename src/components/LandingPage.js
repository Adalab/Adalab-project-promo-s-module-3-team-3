import { Link } from "react-router-dom";
import "../styles/layouts/LandingPage.scss";
import Card from "./Preview/Card";

const LandingPage = ({ cards }) => {
  return (
    <main className="landingPage">
      <h1 className="landingPage__title">Proyectos y... ¡ya estaría! </h1>
      <h2 className="landingPage__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología
      </h2>
      <Link to="/CreateProject">
        <button className="btn">NUEVO PROYECTO</button>{" "}
      </Link>
      <button className="btn">VER PROYECTOS</button>
      <div className="landingDiv">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
      {cards.length === 0 && <p className="msg">No hay tarjetas que mostrar</p>}
    </main>
  );
};

export default LandingPage;
