import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Question1 from './pages/Question1';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/questions' element={<Question1 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
