 const Project = ({data, dataError, handleInput}) => {
    return (
        <>
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
      </>
    )
 }

 export default Project;