import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Question7 from './pages/Question7';
import Question8 from './pages/Question8';
import Question9 from './pages/Question9';
import Question10 from './pages/Question10';
import Question11 from './pages/Question11';
import Question12 from './pages/Question12';
import Question13 from './pages/Question13';
import Question14 from './pages/Question14';
import Question15 from './pages/Question15';
import Result from  './pages/Result';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/questions/question1' element={<Question1 /> } />
      <Route path='/questions/question2' element={<Question2 />} />
      <Route path='/questions/question3' element={<Question3 />} />
      <Route path='/questions/question4' element={<Question4 />} />
      <Route path='/questions/question5' element={<Question5 />} />
      <Route path='/questions/question6' element={<Question6 />} />
      <Route path='/questions/question7' element={<Question7 />} />
      <Route path='/questions/question8' element={<Question8 />} />
      <Route path='/questions/question9' element={<Question9 />} />
      <Route path='/questions/question10' element={<Question10 />} />
      <Route path='/questions/question11' element={<Question11 />} />
      <Route path='/questions/question12' element={<Question12 />} />
      <Route path='/questions/question13' element={<Question13 />} />
      <Route path='/questions/question14' element={<Question14 />} />
      <Route path='/questions/question15' element={<Question15 />} />
      <Route path='/result' element={<Result />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
