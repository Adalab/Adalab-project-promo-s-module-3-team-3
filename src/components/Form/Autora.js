const Autora = ({data, dataError, handleInput}) => {
    return(
        <>
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
      </>
    )
}

export default Autora;