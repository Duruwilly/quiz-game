import React, { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { useGlobalContext } from '../context/ContextWrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../redux/userSlice'

const Home = () => {
  const { difficulty, category, onChangeInput, onClickReset } = useGlobalContext()

 const inputStyle = 'w-full block py-2 px-3 appearance-none rounded-t-lg relative border border-gray-300 focus:outline-none placeholder:text-base text-lg shadow'
 const [userData, setUserData] = useState({
  name: '',
  gender: ''
 })
 const dispatch = useDispatch()

 const navigate = useNavigate()

 const onChange = (e) => {
  setUserData((prev) => ({
    ...prev,
    [e.target.id]: e.target.value,
  }));
 }

 const onSubmit = (e) => {
  e.preventDefault()
  onClickReset()
  dispatch(register({ ...userData }))
    navigate('/questions/question1')
 }

 const { name, gender } = userData

  return (
    <section className='flex justify-center items-center bg-gra'>
      <div className='w-full max-w-screen-sm bg-gray h-screen'>
       <Header title={`welcome ${name}`} />
       <div className='px-4 mt-4'>
       <button type='button' className='border-2 border-indigo-800 rounded-2xl px-3 text-lg text-gray-600'>Restart</button>
       <main className='mt-10'>
        <form onSubmit={onSubmit} className='space-y-2'>
         <input type="text" id='name' placeholder='Your Name' value={name} onChange={onChange} className={inputStyle} required />
         <input type="text" id='gender' placeholder='Gender' value={gender} onChange={onChange} className={inputStyle} require />
         <select name="" id="difficulty" value={difficulty} onChange={onChangeInput} className={inputStyle} required>
          <option value="">select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
         </select>
         
         <select name="" id="category" value={category} onChange={onChangeInput} className={inputStyle} required>
          <option value="">select language/framework</option>
          <option value="Code">Code</option>
          <option value="Linux">Linux</option>
          <option value="DevOps">DevOps</option>
          <option value="Kubernetes">Kubernetes</option>
         </select>
         <button type='submit' className='bg-indigo-800 w-full py-2 text-white text-xl rounded font-bold capitalize'>start</button>
        </form>
        <div className='mt-10 text-sm'>
         <p>Note: you have 01:50 per question and your time start when you click on the start button. Do not return to the previous question after submiting.</p>
        </div>
       </main>
       </div>
      </div>
    </section>
  )
}

export default Home