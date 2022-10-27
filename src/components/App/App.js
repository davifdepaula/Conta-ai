import React from 'react';
import { useState } from 'react';
import Button from '../Button'
import './App.css';

export default function App() {
  const [count, setCount] = useState(0)
  function sum(){
      setCount(count + 1)  
  }

  function sub() {
    setCount(count - 1)
  }
    return (
      <div className="App">
        <h1>Conta ai!</h1>
        <h2>{count}</h2>        
        <div className='buttons'>
          <div onClick={sum} >
          <Button
              className="sumButton"
              operation="+"
            />
          </div>

          <div onClick={sub}>
          <Button
              className="subButton"
              operation="-"
            />
          </div>

        </div>
      </div>
    );
}
