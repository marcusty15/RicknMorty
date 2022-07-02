import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation/Presentation';

import Personajes from './pages/Personajes';
import Ubicaciones from './pages/Ubicaciones/Ubicaciones';

function App() {
  return (
    <Router>
      <Navbar />
      <Presentation/>
      <Routes>
        <Route path="/RicknMorty" element={<Personajes />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
