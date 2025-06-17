import { useState } from 'react'
import './App.css'
import ExampleCard from './components/card'
import MeButton from './components/MeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-600 text-8xl font-bold text-center mb-8'>Guessingly</h1>
      <div className='mb-20'>
        <ExampleCard cardNumber={1} />
      </div>
      <div className='mb-20'>
        <ExampleCard cardNumber={2}/>
      </div>
      <div className='flex justify-center gap-4 mt-8'>
        <MeButton keyword="Start"/>
        <MeButton keyword="Count1"/>
        <MeButton keyword="Count2"/>
      </div>
    </>
  )
}

export default App