import cover from '../images/proyecto.jpg';
import user from '../images/user.jpeg';
import logo from '../images/logo-adalab.png';
import '../styles/App.scss';
import { useState } from 'react';
import dataApi from '../services/api';

function App() {
  const [dataError, setDataError] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
  });
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image: 'https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg',
    photo: 'https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg',
  });
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((info) => {
      console.log(info);
      setUrl(info.cardURL);
      setShow(info.success);
    });
  };
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === 'name') {
      if (inputValue === '') {
        setDataError({
          ...dataError,
          name: 'Introduce el nombre de tu proyecto',
        });
      } else {
        setDataError({ ...dataError, name: '' });
      }
      setData({ ...data, name: inputValue });
    } else if (inputName === 'slogan') {
        if (inputValue === '') {
          setDataError({ ...dataError, slogan: 'Introduce tu slogan' });
        } else {
          setDataError({ ...dataError, slogan: '' });
        }
      setData({ ...data, slogan: inputValue });
    } else if (inputName === 'repo') {
      if (inputValue === '') {
        setDataError({ ...dataError, repo: 'Introduce el enlace de tu repo' });
      } else {
        setDataError({ ...dataError, repo: '' });
      }
      setData({ ...data, repo: inputValue });
    } else if (inputName === 'demo') {
      if (inputValue === '') {
        setDataError({ ...dataError, demo: 'Introduce el enlace de tu demo' });
      } else {
        setDataError({ ...dataError, demo: '' });
      }
      setData({ ...data, demo: inputValue });
    } else if (inputName === 'technologies') {
        if (inputValue === '') {
          setDataError({ ...dataError, technologies: 'Introduce las tecnologías utilizadas' });
        } else {
          setDataError({ ...dataError, technologies: '' });
        }
      setData({ ...data, technologies: inputValue });
    } else if (inputName === 'desc') {
      if (inputValue === '') {
        setDataError({
          ...dataError,
          desc: 'Introduce la descripción de tu proyecto',
        });
      } else {
        setDataError({ ...dataError, desc: '' });
      }
      setData({ ...data, desc: inputValue });
    } else if (inputName === 'autor') {
      if (inputValue === '') {
        setDataError({ ...dataError, autor: 'Introduce tu nombre' });
      } else {
        setDataError({ ...dataError, autor: '' });
      }
      setData({ ...data, autor: inputValue });
    } else if (inputName === 'job') {
      if (inputValue === '') {
        setDataError({ ...dataError, job: 'Introduce tu profesión' });
      } else {
        setDataError({ ...dataError, job: '' });
      }
      setData({ ...data, job: inputValue });
    }
  };
  return (
    <div className="container">
      <header className="header">
        <p className="header__p">
          <i className="header__p--i fa-solid fa-laptop-code"></i>
          <span className="header__p--span">Proyectos y ya estaría</span>
        </p>
        <img className="header__img" src={logo} alt="" />
      </header>

      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <article className="articleProject">
              <small className="articleProject__subtitle">
                Personal Project Card
              </small>
              <hr className="articleProject__line" />

              <h2 className="articleProject__title">
                {data.name || 'Elegant Workspace'}
              </h2>
              <p className="articleProject__slogan">
                {data.slogan || 'Diseños Exclusivos'}
              </p>
              <p className="articleProject__desc">
                {data.desc ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis. '}
              </p>
              <div className="articleProject__technologies">
                <p className="articleProject__technologies--text">
                  {data.technologies || 'React JS - HTML - CSS'}
                </p>
                <span className="articleProject__technologies--icons">
                  <a href={data.demo.includes('https://')} target="_blank" className='link__icons' rel='noreferrer'><i className="fa-solid fa-globe"></i></a>
                  <a href={data.repo} target="_blank" className='link__icons' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
                </span>
              </div>
            </article>

            <article className="info-autor">
              <img className="info-autor__image" src={user} alt="" />
              <p className="info-autor__job">
                {data.job || 'Full Stack Developer'}
              </p>
              <p className="info-autor__name">
                {data.autor || 'Emmelie Björklund'}
              </p>
            </article>
          </section>
        </section>

        <section className="form">
          <h2 className="form__title">Información</h2>

          <section className="form__ask-info">
            <p className="form__ask-info--subtitle">
              Cuéntanos sobre el proyecto
            </p>
            <hr className="form__ask-info--line" />
          </section>

          <fieldset className="form__project">
            <input
              className="form__project--input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={data.name}
              onChange={handleInput}
              required
            />
            <span className="error">{dataError.name}</span>
            <input
              className="form__project--input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={data.slogan}
              onChange={handleInput}
            />
            <span className="error">{dataError.slogan}</span>
            {/* <div className='form__project--div'> */}
            <input
              className="form__project--input "
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={data.repo}
              onChange={handleInput}
              required
            />
            <span className="error">{dataError.repo}</span>
            <input
              className="form__project--input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={data.demo}
              onChange={handleInput}
              required
            />
            <span className="error">{dataError.demo}</span>
            {/* </div> */}
            <input
              className="form__project--input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={data.technologies}
              onChange={handleInput}
            />
            <span className="error">{dataError.technologies}</span>
            <textarea
              className="form__project--textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={data.desc}
              onChange={handleInput}
              required
            ></textarea>
            <span className="error">{dataError.desc}</span>
          </fieldset>

          <section className="form__ask-info">
            <p className="form__ask-info--subtitle">
              Cuéntanos sobre la autora
            </p>
            <hr className="form__ask-info--line" />
          </section>

          <fieldset className="form__autor">
            <input
              className="form__autor--input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              value={data.autor}
              onChange={handleInput}
              required
            />
            <span className="error">{dataError.autor}</span>
            <input
              className="form__autor--input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={data.job}
              onChange={handleInput}
              required
            />
            <span className="error">{dataError.job}</span>
          </fieldset>

          <section className="form__buttons-img">
            <button className="form__buttons-img--btn">
              Subir foto de proyecto
            </button>
            <button className="form__buttons-img--btn">
              Subir foto de autora
            </button>
          </section>
          <section className="form__buttons-img">
            <button
              className="form__buttons-img--btn-large"
              onClick={handleClickCreateCard}
            >
              Crear Tarjeta
            </button>
          </section>

          <section className={show ? "form__card" : "form__card hidden"}>
            <span className=""> La tarjeta ha sido creada: </span>
            <a href={url} className="btn__url" target="_blank">
              {url}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
