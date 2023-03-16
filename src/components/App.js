import '../styles/App.scss';

import Header from '../components/Header/Header';
import CreateProject from './CreateProject';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/CreateProject" element={<CreateProject />}></Route>
      </Routes>
    </div>
  );
}

export default App;
