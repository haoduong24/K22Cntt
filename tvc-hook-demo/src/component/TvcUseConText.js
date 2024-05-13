import React, { useContext } from 'react'
import TvcUseConText1 from './TvcUseConText1';
export const ThemeConText=createContext(); // tao ngu canh de chia se
export default function TvcUseConText() {
    // state
    const [theme, setTheme]= useContext('red');
    // ham thay doi theme
    const TvcHandleChange=(toggle)=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeConText.Provider value={theme}>
        <div className='alert'>
            <h2>Demo useContext</h2>
            <TvcUseConText1/>
            <button onClick={TvcHandleChange}>Change bgColor</button>
        </div>
    </ThemeConText.Provider>
  )
}
