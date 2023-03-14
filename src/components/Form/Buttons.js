const Buttons = ({handleClickCreateCard, show, url}) => {
    return(
        <>
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
      </>
    )
}

export default Buttons;