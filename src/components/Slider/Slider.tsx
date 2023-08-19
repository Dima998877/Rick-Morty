import React, { useRef } from "react"

import "./Slider.css"

import { SliderItem2 } from "../SliderItem2/SliderItem2"

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderImgRef = useRef<HTMLImageElement>(null)

  const onHandleClick = (e: React.SyntheticEvent) => {
    const handle = e.currentTarget
    if (sliderRef.current === null) return
    else if (handle.className.includes("right-handle")) {
      sliderRef.current.scrollLeft += sliderImgRef.current!.clientWidth
    } else if (handle.className.includes("left-handle")) {
      sliderRef.current.scrollLeft -= sliderImgRef.current!.clientWidth
    } else {
      console.log("no class")
    }
  }
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
      <SliderItem2 sliderImgRef={sliderImgRef} sliderRef={sliderRef} />
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
