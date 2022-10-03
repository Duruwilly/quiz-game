import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/userSlice";

const Result = () => {
  const { score } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user.userInfo);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const restart = (e) => {
    e.preventDefault();
    dispatch(resetScore());
    navigate('/')
  };

  return (
    <section className="flex justify-center items-center bg-gra">
      <div className="w-full max-w-screen-sm bg-gray h-screen">
        <Header
          title={
            score < 5 ? `Oops` : score >= 8 ? `well done` : `congratulations`
          }
        />
        <div className="mt-4">
          <p className="bg-white py-4 px-3 shadow">
            {score < 5
              ? `Oops! ${name} your score is ${score} which is below average`
              : score >= 8
              ? `well done ${name} your score is ${score} which is above average`
              : `congratulations ${name} your score is ${score}`}
          </p>
          <div className="mt-44 px-4">
          <button
            type="button"
            className="bg-transparent border-2 border-indigo-800 w-full py-2 text-black text-xl rounded font-bold my-4"
            >
            Share your score
          </button>
          <button
            type="button"
            className="bg-indigo-800 w-full py-2 text-white text-xl rounded font-bold"
            onClick={restart}
            >
            Restart
          </button>
          <p className="text-center mt-6 font-semibold cursor-pointer" onClick={() => navigate('/')}>return back to home</p>
            </div>
        </div>
      </div>
    </section>
  );
}


export default Result