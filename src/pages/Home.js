import React, { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { useGlobalContext } from '../context/ContextWrapper'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { difficulty, category, onChangeInput } = useGlobalContext()

 const inputStyle = 'w-full block py-2 px-3 appearance-none rounded-t-lg relative border border-gray-300 focus:outline-none placeholder:text-base text-lg shadow'
 const [name, setName] = useState('')
 const [error, setError] = useState(false)

 const navigate = useNavigate()

 const onChange = (e) => {
  setName(e.target.value)
 }

 const onSubmit = (e) => {
  e.preventDefault()
  
    navigate(':/question1')
  
 }

  return (
    <section className='flex justify-center items-center bg-gra'>
      <div className='w-full max-w-screen-sm bg-gray h-screen'>
       <Header title='Welcome' />
       <div className='px-4 mt-4'>
       <button type='button' className='w-ful border-2 border-purple-800 rounded-2xl px-3 text-lg text-gray-600'>Restart</button>
       <main className='mt-10'>
        <form onSubmit={onSubmit} className='space-y-2'>
         <input type="text" id='name' placeholder='Your Name' value={name} onChange={onChange} className={inputStyle} required />
         <select name="" id="difficulty" value={difficulty} onChange={onChangeInput} className={inputStyle} required>
          <option value="">select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
         </select>
         <select name="" id="category" value={category} onChange={onChangeInput} className={inputStyle} required>
          <option value="">select language/framework</option>
          <option value="Linux">Linux</option>
          <option value="DevOps">DevOps</option>
          <option value="Kubernetes">Kubernetes</option>
         </select>
         <Button title='start'/>
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