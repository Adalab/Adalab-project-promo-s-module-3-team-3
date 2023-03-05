import cover from '../images/cover.jpeg'
import user from '../images/user.jpeg'
import logo from '../images/logo-adalab.png'
import '../styles/App.scss';

function App() {
  return (
    <div className="container">

      <header className="header">
        <p className="header__p">
          <i className="header__p--i fa-solid fa-laptop-code"></i>
          <span className="header__p--span">Proyectos Molones</span></p>
        <img className="header__img" src={logo} alt="" />
      </header>

      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="author">
            <article className="articleProject">
              <small className="articleProject__subtitle">Personal Project Card</small>
              <hr className="articleProject__line" />

              <h2 className="articleProject__title">Elegant Workspace</h2>
              <p className="articleProject__slogan">Diseños Exclusivos</p>
              <p className="articleProject__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <div className="articleProject__technologies">
                <p className="articleProject__technologies--text">React JS, MongoDB</p>
              </div>
            </article>

            <article className="info-author">
              <img className="image" src={user} alt="" />
              <p className="job">Full Stack Developer</p>
              <p className="name">Emmelie Björklund</p>
            </article>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
          <div>
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
            />
          </div>
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="author">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="author"
              id="author"
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
