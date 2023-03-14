const Form = ({
  data,
  dataError,
  handleInput,
  handleClickCreateCard,
  show,
  url,
}) => {
  return (
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
        <p className="form__ask-info--subtitle">Cuéntanos sobre la autora</p>
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
        <button className="form__buttons-img--btn">Subir foto de autora</button>
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
  );
};

export default Form;
