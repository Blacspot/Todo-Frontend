import { useState } from 'react';

const Counter = () => {
     const [number, setNumber] = useState(0)
    
  return (
    <div>
        <h2>Increment and decrement</h2>
      
        <button onClick={() => setNumber(number + 1)}>
          Increment
        </button>

        <br />
        <p>
          {number}
        </p>
        <button onClick={() => setNumber(number - 1)}>
          decrement
        </button>
        <br />

        <button onClick={() => setNumber(0)}>
          reset
        </button>
    </div>
  )
}

export default Counter