import { useState } from 'react'

export default function Counter(){
  const [count,setCount] = useState(0);

  function addCount(){
    setCount(count+1);
  }

  function pullCount(){
    if(count>0){
      setCount(count-1);
    }
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={pullCount}>-</button>
    </div>
  );
}