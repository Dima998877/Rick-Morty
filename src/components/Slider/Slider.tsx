import React from "react"

import "./Slider.css"

import { ISliderProps } from "../types"
import { SliderItem } from "../SliderItem/SliderItem"

const Slider: React.FC<ISliderProps> = ({
  onHandleClick,
  sliderImgRef: sliderImgRef,
  sliderRef: sliderRef,
}) => {
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
      <SliderItem sliderImgRef={sliderImgRef} sliderRef={sliderRef} />

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
