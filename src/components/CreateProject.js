import Preview from './Preview/Preview';
import Form from './Form/Form';
import '../styles/layouts/Main.scss';
import { useState } from 'react';
import dataApi from '../services/api';
import objectToExport from '../services/LocalStorage';

const CreateProject = ({cards, setCards}) => {
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
      setUrl(info.cardURL);
      setShow(info.success);
      setCards([...cards, data]);
      /* objectToExport.set('cardList', data);   */
    });
  };

  const validateInput = (name, value) => {
    if (value === '') {
      return `Introduce ${name}`;
    }
    if (name === 'repo' || name === 'demo') {
      if (!(value.startsWith('https://') || value.startsWith('http://'))) {
        //todo No hagas esto y no hagas lo otro NO está OK (!value.startsWith("https://")  y !value.startsWith("http://") , debe ser no hagas esto o lo otro (como lo tenemos ahora está OK).
        return 'Introduce un enlace válido que empiece por https:// o http://';
      }
    }
    return '';
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    const error = validateInput(inputName, inputValue);
    setData({ ...data, [inputName]: inputValue });
    setDataError({ ...dataError, [inputName]: error });
  };
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
  );
};

export default CreateProject;
