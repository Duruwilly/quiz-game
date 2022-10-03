import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/userSlice";
import { useGlobalContext } from "../context/ContextWrapper";

const Result = () => {
  const { quizData } = useGlobalContext();
  const { score } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user.userInfo);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const restart = (e) => {
    e.preventDefault();
    dispatch(resetScore());
    navigate("/");
  };

  return (
    <section className="flex justify-center items-center bg-gra">
      <div className="w-full max-w-screen-sm bg-gray h-screen">
        <Header
          title={
            score < 7 ? `Oops` : score < 12 ? `well done` : `congratulations`
          }
        />
        <div className="mt-4">
          <p className="bg-white py-4 px-3 shadow">
            {score < 7
              ? `Oops! ${name} your score is ${score} which is below average`
              : score < 12
              ? `well done ${name} your score is ${score} which is above average`
              : `congratulations ${name} your score is ${score}`}
          </p>
          <div className="mt-44 px-4">
            {shareLinkCopied && <p className="text-right">Link Copied!</p>}
            <button
              type="button"
              className="bg-transparent border-2 border-indigo-800 w-full py-2 text-black text-xl rounded font-bold my-4"
              onClick={() => {
                navigator.clipboard.writeText(
                  `i just took quizied code assessment and i got ${score} out of ${quizData.length} try yours too ${window.location.href}`
                );
                setShareLinkCopied(true);
                setTimeout(() => {
                  setShareLinkCopied(false);
                }, 2000);
              }}
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
            <p
              className="text-center mt-6 font-semibold cursor-pointer"
              onClick={() => navigate("/")}
            >
              return back to home
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
