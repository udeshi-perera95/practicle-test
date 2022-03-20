import React,{useState} from 'react'
import { DataFile } from './DataFile'

function SlideImage() {
    const [currImg, setCurrImg] = useState(0);
    const length = slide.length
  return (
      <>
      {DataFile.map((slide,index)=>{
          return <img src ={slide.image} alt="image"></img>
      })}
      </>
  )
}

export default SlideImage
