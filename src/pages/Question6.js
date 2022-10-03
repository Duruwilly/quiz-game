import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../context/ContextWrapper";
import { setScore } from "../redux/userSlice";

const Question6 = () => {
  const btnDisabled =
    "bg-indigo-800 w-full py-2 text-white text-xl rounded font-bold";
  const btnDisabledActive =
    "bg-indigo-500 w-full py-2 text-white text-xl rounded font-bold";
  const { quizData, timer, clearTimer, getDeadTime } =
    useGlobalContext();

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const disableBtn = () => {
    if (timer === "00:00") {
      navigate("/questions/question7");
    }
  };

  disableBtn();

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === "true") {
      dispatch(setScore());
    }
    setDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions/question7");
  };

  return (
    <section className="flex justify-center items-center bg-gra">
      <div className="w-full max-w-screen-sm bg-gray h-screen pb-10">
        <Header
          title='you are blazing a trail'
        />
        <div className="px- mt-4">
          <div className="flex justify-between items-center px-4">
            <p className=" text-sm text-gray-600">{timer}</p>
            <span>Question 6/{quizData.length}</span>
          </div>
          <div className="mt-5">
            <p className="bg-white py-4 px-3 shadow">{quizData[5]?.question}</p>
            <form
              key={quizData[5]?.id}
              onSubmit={handleSubmit}
              className="space-y-2 mt-4 px-4"
            >
              {quizData[5]?.answers?.answer_a !== null && (
                <div className="bg-white py-5 px-3 rounded-lg">
                  <label className="container">
                    <p>{quizData[5]?.answers?.answer_a}</p>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        handleAnswerClick(
                          quizData[5]?.correct_answers?.answer_a_correct
                        )
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              )}
              {quizData[5]?.answers?.answer_b !== null && (
                <div className="bg-white py-5 px-3 rounded-lg">
                  <label className="container">
                    <p>{quizData[5]?.answers?.answer_b}</p>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        handleAnswerClick(
                          quizData[5]?.correct_answers?.answer_b_correct
                        )
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              )}
              {quizData[5]?.answers?.answer_c !== null && (
                <div className="bg-white py-5 px-3 rounded-lg">
                  <label className="container">
                    <p>{quizData[5]?.answers?.answer_c}</p>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        handleAnswerClick(
                          quizData[5]?.correct_answers?.answer_c_correct
                        )
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              )}
              {quizData[5]?.answers?.answer_d !== null && (
                <div className="bg-white py-5 px-3 rounded-lg">
                  <label className="container">
                    <p>{quizData[5]?.answers?.answer_d}</p>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        handleAnswerClick(
                          quizData[5]?.correct_answers?.answer_d_correct
                        )
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              )}
              <button
                type="submit"
                className={disabled ? btnDisabledActive : btnDisabled}
                disabled={disabled}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question6;
