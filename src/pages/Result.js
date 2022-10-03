import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";

const Result = () => {
  const { score, name } = useSelector((state) => state.user);

  return (
    <section className="flex justify-center items-center bg-gra">
      <div className="w-full max-w-screen-sm bg-gray h-screen">
        <Header
          title={
            score < 5 ? `Oops` : score >= 8 ? `well done` : `congratulations`
          }
        />
        <div className="px-4 mt-4">
          <p>
            {score < 5 ? `Oops your score is ${score} which is below average` : score >= 8 ? `well done your score is ${score} which is above average` : `congratulations champ your score is ${score}`}
          </p>
        </div>
      </div>
    </section>
  );
}


export default Result