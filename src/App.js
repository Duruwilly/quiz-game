import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Result,
} from "./pages";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/question1" element={<Question1 />} />
        <Route path="/questions/question2" element={<Question2 />} />
        <Route path="/questions/question3" element={<Question3 />} />
        <Route path="/questions/question4" element={<Question4 />} />
        <Route path="/questions/question5" element={<Question5 />} />
        <Route path="/questions/question6" element={<Question6 />} />
        <Route path="/questions/question7" element={<Question7 />} />
        <Route path="/questions/question8" element={<Question8 />} />
        <Route path="/questions/question9" element={<Question9 />} />
        <Route path="/questions/question10" element={<Question10 />} />
        <Route path="/questions/question11" element={<Question11 />} />
        <Route path="/questions/question12" element={<Question12 />} />
        <Route path="/questions/question13" element={<Question13 />} />
        <Route path="/questions/question14" element={<Question14 />} />
        <Route path="/questions/question15" element={<Question15 />} />
        <Route path="/result" element={<Result />} />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
