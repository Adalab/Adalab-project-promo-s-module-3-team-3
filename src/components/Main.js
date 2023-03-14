import Preview from "../components/Preview/Preview";
import Form from "../components/Form/Form";
import '../styles/layouts/Main.scss'

const Main = ({data, dataError, handleInput, handleClickCreateCard, show, url}) => {
    return (
        <main className="main">
        <Preview data={data}></Preview>
        <Form
          data={data}
          dataError={dataError}
          handleInput={handleInput}
          handleClickCreateCard={handleClickCreateCard}
          show={show}
          url={url}
        ></Form>
      </main>
    )
}

export default Main;