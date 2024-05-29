import React, { useEffect, useState } from 'react'

export default function TvcUseEffect() {
    // state: ccount
    const [count, setCount]=useState(0);
    // ham xu li
    const TvcHangdleClick=()=>{
        setCount(pre=>prev+1)
    }
    //su dung useeffect de cap nhat lai title
    useEffect(()=>{
        document.title=` Duong Hao: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    //  useEffect: tham so thu 2 la mang rong
    useEffect(()=>{
        console.log("Chay lan dau tien- mot lan");
    },[])
    // deps
    useEffect(()=>{
        console.log(`useEffect count click:`, count)
    },[count])
  return (
    <div>
        <h2>Demo-useEffect : You clicked {count} times</h2>
        <button onClick={TvcHangdleClick}>Click here</button>
    </div>
  )
}
