import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-screen-sm bg-gray h-screen pb-10">
        <div className="mt-40 px-4">
          <p className="text-center">sorry you seems to have entered an invalid url</p>
          <button
            type="button"
            className="bg-indigo-800 w-full mt-4 py-2 text-white text-xl rounded font-bold"
            onClick={() => navigate("/")}
          >
            return back to home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
