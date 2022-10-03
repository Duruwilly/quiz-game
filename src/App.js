import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/questions/question1' element={<Question1 /> } />
      <Route path='/questions/question2' element={<Question2 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
