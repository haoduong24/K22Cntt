import React, { useState } from 'react'
import TvcUseState from './component/TvcUseState'
export default function TvUseState() {
    const [count, setCount]=useState(10);
    const [list, setList]=useState([1,5]);
   const TvcHandleList=()=>{
      let sum = parseInt(Math.random()*100);
      setList([
        ...list,
        num
      ])
    }
    // cach khac
    //let lst=list.push(num);
    setList(lst);
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click me</button>
        <hr/>
        <h3>list: {list.toString()}</h3>
        <button onClick={TvcHandleList}>them ngau nhien</button>
    </div>
  )
}
