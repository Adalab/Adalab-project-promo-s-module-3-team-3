import "../styles/App.scss";
import { useState } from "react";
import dataApi from "../services/api";

import Header from "../components/Header/Header";
import Preview from "../components/Preview/Preview";
import Form from "../components/Form/Form";

function App() {
  const [dataError, setDataError] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
  });
  const [data, setData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg",
    photo: "https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg",
  });
  const [url, setUrl] = useState("");
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
    if (inputName === "name") {
      if (inputValue === "") {
        setDataError({
          ...dataError,
          name: "Introduce el nombre de tu proyecto",
        });
      } else {
        setDataError({ ...dataError, name: "" });
      }
      setData({ ...data, name: inputValue });
    } else if (inputName === "slogan") {
      if (inputValue === "") {
        setDataError({ ...dataError, slogan: "Introduce tu slogan" });
      } else {
        setDataError({ ...dataError, slogan: "" });
      }
      setData({ ...data, slogan: inputValue });
    } else if (inputName === "repo") {
      if (inputValue === "") {
        setDataError({ ...dataError, repo: "Introduce el enlace de tu repo" });
      } else if (!data.repo.startsWith("https://")) {
        setDataError({
          ...dataError,
          repo: "Introduce un enlace válido que empiece por https://",
        });
      } else {
        setDataError({ ...dataError, repo: "" });
      }
      setData({ ...data, repo: inputValue });
    } else if (inputName === "demo") {
      if (inputValue === "") {
        setDataError({ ...dataError, demo: "Introduce el enlace de tu demo" });
      } else if (!data.demo.startsWith("https://")) {
        setDataError({
          ...dataError,
          demo: "Introduce un enlace válido que empiece por https://",
        });
      } else {
        setDataError({ ...dataError, demo: "" });
      }
      setData({ ...data, demo: inputValue });
    } else if (inputName === "technologies") {
      if (inputValue === "") {
        setDataError({
          ...dataError,
          technologies: "Introduce las tecnologías utilizadas",
        });
      } else {
        setDataError({ ...dataError, technologies: "" });
      }
      setData({ ...data, technologies: inputValue });
    } else if (inputName === "desc") {
      if (inputValue === "") {
        setDataError({
          ...dataError,
          desc: "Introduce la descripción de tu proyecto",
        });
      } else {
        setDataError({ ...dataError, desc: "" });
      }
      setData({ ...data, desc: inputValue });
    } else if (inputName === "autor") {
      if (inputValue === "") {
        setDataError({ ...dataError, autor: "Introduce tu nombre" });
      } else {
        setDataError({ ...dataError, autor: "" });
      }
      setData({ ...data, autor: inputValue });
    } else if (inputName === "job") {
      if (inputValue === "") {
        setDataError({ ...dataError, job: "Introduce tu profesión" });
      } else {
        setDataError({ ...dataError, job: "" });
      }
      setData({ ...data, job: inputValue });
    }
  };
  return (
    <div className="container">
      <Header></Header>

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
    </div>
  );
}

export default App;
