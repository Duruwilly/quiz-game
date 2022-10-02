import React, { useState, useContext, createContext, useEffect, useRef } from "react";
import axios from "axios";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
 const Ref = useRef(null);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quiz1, setQuiz1] = useState();
 const [timer, setTimer] = useState("00:00:00");

 const [inputData, setInputData] = useState({
   difficulty: "easy",
   category: "",
 });

 const onChangeInput = (e) => {
   setInputData((prevState) => ({
     ...prevState,
     [e.target.id]: e.target.value,
   }));
 };

 const { difficulty, category } = inputData;

  useEffect(() => {
    getNewsData(difficulty, category);
  }, [difficulty, category]);

  const apiEndPoint = process.env.REACT_APP_ENDPOINT_KEY;
  const apikey = process.env.REACT_APP_API_KEY;

  const getNewsData = async (difficulty, category) => {
    try {
      const res = await axios.get(
       `${apiEndPoint}questions?apiKey=${apikey}&limit=15&category=${category}&difficulty=${difficulty}`
      );
      setQuizData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:01:30");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 90);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, [quiz1]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        category,
        timer,
        getDeadTime,
        clearTimer,
        onClickReset,
        onChangeInput
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => useContext(QuizContext);
