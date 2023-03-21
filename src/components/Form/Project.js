 const Project = ({data, dataError, handleInput}) => {
    return (
        <>
        <section className="form__ask-info">
        <p className="form__ask-info--subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="form__ask-info--line" />
      </section>

      <fieldset className="form__project">
        <label htmlFor="name">Nombre:</label>
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
        <label htmlFor="slogan">Slogan:</label>
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
        <label htmlFor="repo">Repo:</label>
        <input
          className="form__project--input "
          type="text"
          name="repo"
          id="repo"
          placeholder="Ej. https://github.com/Adalab/..."
          value={data.repo}
          onChange={handleInput}
          required
        />
        <span className="error">{dataError.repo}</span>
        <label htmlFor="demo">Demo:</label>
        <input
          className="form__project--input"
          type="text"
          placeholder="Ej. https://beta.adalab.es/..."
          name="demo"
          id="demo"
          value={data.demo}
          onChange={handleInput}
          required
        />
        <span className="error">{dataError.demo}</span>
        {/* </div> */}
        <label htmlFor="technologies">Tecnologías:</label>
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
        <label htmlFor="desc">Descripción:</label>
        <textarea
          className="form__project--textarea"
          type="text"
          placeholder="Descripción con un máximo de 250 caracteres permitido"
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleInput}
          maxlength="250"
          required
        ></textarea>
        <span className="error">{dataError.desc}</span>
      </fieldset>
      </>
    )
 }

 export default Project;