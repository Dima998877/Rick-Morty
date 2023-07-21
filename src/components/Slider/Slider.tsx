import React from "react"
import "./Slider.css"
import { rm_images } from "../../assets/images/R&M images/rm_images"

interface ISliderProps {
  onHandleClick: (e: any) => void
  slider: React.RefObject<HTMLDivElement>
  slImg: React.RefObject<HTMLImageElement>
}

const Slider: React.FC<ISliderProps> = ({ onHandleClick, slImg, slider }) => {
  return (
    <div className='slider_container'>
      <button
        className='handle left-handle'
        onClick={(e) => {
          onHandleClick(e)
        }}
      >
        <div className='text'>&#8249;</div>
      </button>
      <div ref={slider} className='slider'>
        {rm_images.map((img, index) => {
          return (
            <img
              ref={slImg}
              src={img}
              alt='img'
              className='slide_img'
              key={index}
            />
          )
        })}
      </div>
      <button
        className='handle right-handle'
        onClick={(e) => {
          onHandleClick(e)
        }}
      >
        <div className='text'>&#8250;</div>
      </button>
    </div>
  )
}

export default Slider
