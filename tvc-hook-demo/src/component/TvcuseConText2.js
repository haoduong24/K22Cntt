import React, { useContext } from 'react'
import { ThemeConText } from './TvcUseConText'

export default function TvcuseConText2() {
    const theme=useContext(ThemeConText);
  return (
    <div className={theme + 'm-3'}>
        <h2>TvcuseConText2</h2>
        <p>
            <b>2210900099</b>
            <b>Duong Hao</b>
            <b>K22CNT1</b>
        </p>
    </div>
  )
}
