import React , {useState} from 'react'

const App = () => {
  const [count , setCount] = useState(0)
  function decrementHandler() {
    setCount(count-1)
  }
  function incrementHandler() {
    setCount(count+1)
  }
  function resetHandler() {
    setCount(0)
  }
  return (
   <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-[#344151] gap-10 select-none">
        <div className="text-3xl font-semibold text-blue-300">Increment and Decrement</div>
        <div className="flex text-blue-400 bg-white gap-8 px-6 py-4 rounded-xl text-2xl">
          <button onClick={decrementHandler}>-</button>
          <div className="border-r-2 border-l-2 py-2 px-4 font-bold">{count}</div>
          <button onClick={incrementHandler}>+</button>
        </div>
        <div className="bg-blue-200 text-blue-700 px-4 py-3 rounded-xl hover:cursor-pointer select-none" onClick={resetHandler}>Reset</div>
   </div>
  )
}

export default App