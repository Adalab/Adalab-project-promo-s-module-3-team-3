import '../styles/App.scss';
import objectToExport from '../services/LocalStorage';
import { useState } from 'react';
import Header from '../components/Header/Header';
import CreateProject from './CreateProject';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
   const [cards, setCards] = useState(objectToExport.get('cardList', [])); 

  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage cards={cards} />}/>
        <Route 
          path="/CreateProject" 
          element={<CreateProject cards={cards} setCards={setCards} />}/>
      </Routes>
    </div>
  );
}

export default App;
