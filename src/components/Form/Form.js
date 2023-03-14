import Autora from './Autora';
import Buttons from './Buttons';
import Project from './Project';

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

      <Project data={data}
        dataError={dataError}
        handleInput={handleInput}></Project>

      <Autora data={data}
        dataError={dataError}
        handleInput={handleInput}></Autora>

      <Buttons handleClickCreateCard={handleClickCreateCard}
        show={show}
        url={url}> </Buttons>
    </section>
  );
};

export default Form;
