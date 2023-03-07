import cover from '../images/cover.jpeg'
import user from '../images/user.jpeg'
import logo from '../images/logo-adalab.png'
import '../styles/App.scss';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    console.log(inputValue)
    if(inputName === 'name') {
      if(inputValue === '') {
        setError('Introduce tus datos');
      } else {
        setError("");
      }
      setName(inputValue);
      
    } else if(inputName === 'slogan') {
      setSlogan(inputValue);
    } else if(inputName === 'repo') {
      setRepo(inputValue);
    } else if(inputName === 'demo') {
      setDemo(inputValue);
    } else if(inputName === 'technologies') {
      setTechnologies(inputValue);
    } else if(inputName === 'desc') {
      setDesc(inputValue);
    } else if(inputName === 'author') {
      setAuthor(inputValue);
    } else if(inputName === 'job') {
      setJob(inputValue);
    }
  }
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

              <h2 className="articleProject__title">{name || 'Elegant Workspace'}</h2>
              <p className="articleProject__slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="articleProject__desc">
                {desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis. '}
              </p>
              <div className="articleProject__technologies">
                <p className="articleProject__technologies--text">{technologies || 'React JS - HTML - CSS'}
                </p>
                <span className='articleProject__technologies--icons'>
                  <i class="fa-solid fa-globe"></i>
                  <i class="fa-brands fa-github"></i>
                </span>
              </div>
            </article>

            <article className="info-author">
              <img className="info-author__image" src={user} alt="" />
              <p className="info-author__job">{job || 'Full Stack Developer'}</p>
              <p className="info-author__name">{author || 'Emmelie Björklund'}</p>
            </article>
          </section>
        </section>

        <section className="form">
          <h2 className="form__title">Información</h2>

          <section className="form__ask-info">
            <p className="form__ask-info--subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="form__ask-info--line" />
          </section>

          <fieldset className="form__project">
            <input
              className="form__project--input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={name}
              onChange={handleInput}
              required
            />
            <span className='error'>{error}</span>
            <input
              className="form__project--input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={slogan}
              onChange={handleInput}
            />
          {/* <div className='form__project--div'> */}
            <input
              className="form__project--input "
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={repo}
              onChange={handleInput}
              required
            />
            <span></span>
            <input
              className="form__project--input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={demo}
              onChange={handleInput}
              required
            />
            <span></span>
          {/* </div> */}
            <input
              className="form__project--input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={handleInput}
            />
            <textarea
              className="form__project--textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={desc}
              onChange={handleInput}
              required
            ></textarea>
            <span></span>
          </fieldset>

          <section className="form__ask-info">
            <p className="form__ask-info--subtitle">Cuéntanos sobre la autora</p>
            <hr className="form__ask-info--line" />
          </section>

          <fieldset className="form__author">
            <input
              className="form__author--input"
              type="text"
              placeholder="Nombre"
              name="author"
              id="author"
              value={author}
              onChange={handleInput}
              required
            />
            <span></span>
            <input
              className="form__author--input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={job}
              onChange={handleInput}
              required
            />
            <span></span>
          </fieldset>

          <section className="form__buttons-img">
            <button className="form__buttons-img--btn">Subir foto de proyecto</button>
            <button className="form__buttons-img--btn">Subir foto de autora</button>
          </section>
          <section className="form__buttons-img">
            <button className="form__buttons-img--btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="form__card">
            <span className=""> La tarjeta ha sido creada: </span>
            {/* <a href="" className="" target="_blank" rel="noreferrer"> </a> */}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
