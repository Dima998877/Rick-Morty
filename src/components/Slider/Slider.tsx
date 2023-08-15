import React from "react"

import "./Slider.css"

import { ISliderProps } from "../types"
import { SliderItem } from "../SliderItem/SliderItem"
import { SliderItem2 } from "../SliderItem2/SliderItem2"

const Slider: React.FC<ISliderProps> = ({
  onHandleClick,
  sliderImgRef,
  sliderRef,
}) => {
  const sliderItem = (
    <SliderItem2 sliderImgRef={sliderImgRef} sliderRef={sliderRef} />
  )

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
      {sliderItem}
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
