import { useState } from "react"
import whateverIdoWhatIwant from '../styles/Hello.module.css'

export default function WhateverIwantToNameThis() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div className={whateverIdoWhatIwant.container}>
      <h1 className={whateverIdoWhatIwant.counter}>Counter {counter}</h1>
      <div className={whateverIdoWhatIwant.btnContainer}>
        <button className={whateverIdoWhatIwant.btn} onClick={decrement}>Decrement</button>
        <button className={whateverIdoWhatIwant.btn}  onClick={increment}>Increment</button>
      </div>
    </div>
  )
}