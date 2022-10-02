import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useGlobalContext } from '../context/ContextWrapper'
import { setScore } from '../redux/userSlice'

const Question1 = () => {
 const radioBtnStyle = 'block py-2 px-2 bg-white'
 const { gender } = useSelector((state) => state.user.userInfo)
 const { quizData, timer, currentQuestion, setCurrentQuestion, setShowScore, onClickReset } = useGlobalContext()

 const [disabled, setDisabled] = useState(true)
 const dispatch = useDispatch()

 const disableBtn = () => {
  if(timer === "00:00") {
   setDisabled(false)
  }
 }

 useEffect(() => {
  disableBtn()
 })
 const handleAnswerClick = (isCorrect) => {
   if(isCorrect === 'true') {
    dispatch(setScore())
    setDisabled(false)
   }
  }

  let nextQuestion = currentQuestion + 1

  const handleSubmit = (e) => {
   e.preventDefault()
   if(nextQuestion < quizData.length) {
    setCurrentQuestion(nextQuestion)
   } else {
    setShowScore(true)
   }
   onClickReset()
  }

  console.log(quizData[0]);

  return (
    <section className="flex justify-center items-center bg-gra">
      <div className="w-full max-w-screen-sm bg-gray h-screen">
        <Header
          title={
            gender === "female" ? `you've got this girl` : `you've got this boy`
          }
        />
        <div className="px-4 mt-4">
          <p className=" text-sm text-gray-600">{timer}</p>
          <p>{quizData[currentQuestion]?.question}</p>
          <form
            key={quizData[currentQuestion]?.id}
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div className="bg-white py-5 px-3 rounded-lg">
              <label className="container">
                <p>{quizData[currentQuestion]?.answers?.answer_a}</p>
                <input
                  type="radio"
                  name="radio"
                  onClick={() =>
                    handleAnswerClick(
                      quizData[currentQuestion]?.correct_answers
                        ?.answer_a_correct
                    )
                  }
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="bg-white py-5 px-3 rounded-lg">
              <label className="container">
                <p>{quizData[currentQuestion]?.answers?.answer_b}</p>
                <input
                  type="radio"
                  name="radio"
                  onClick={() =>
                    handleAnswerClick(
                      quizData[currentQuestion]?.correct_answers
                        ?.answer_b_correct
                    )
                  }
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="bg-white py-5 px-3 rounded-lg">
              <label className="container">
                <p>{quizData[currentQuestion]?.answers?.answer_c}</p>
                <input
                  type="radio"
                  name="radio"
                  onClick={() =>
                    handleAnswerClick(
                      quizData[currentQuestion]?.correct_answers
                        ?.answer_c_correct
                    )
                  }
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="bg-white py-5 px-3 rounded-lg">
              <label className="container">
                <p>{quizData[currentQuestion]?.answers?.answer_d}</p>
                <input
                  type="radio"
                  name="radio"
                  onClick={() =>
                    handleAnswerClick(
                      quizData[currentQuestion]?.correct_answers?.answer_d_correct
                    )
                  }
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <button type="submit" className='bg-purple-800 w-full py-2 text-white text-xl font-bold' disabled={disabled}>submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Question1