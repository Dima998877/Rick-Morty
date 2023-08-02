import React from "react"
import "./Slider.css"
// import { rm_images } from "../../assets/images/R&M images/rm_images"
import EpisodeInfoContainer from "../EpisodeInfo/EpisodeInfoContainer"
interface ISliderProps {
  onHandleClick: (e: any) => void
  sliderRef: React.RefObject<HTMLDivElement>
  sliderImgRef?: React.RefObject<HTMLImageElement>
}

const Slider: React.FC<ISliderProps> = ({
  onHandleClick,
  // sliderImgRef,
  sliderRef,
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
      <div ref={sliderRef} className='slider'>
        {/* {rm_images.map((img, index) => {
          return (

            <img
              ref={sliderImg}
              src={img}
              key={index}
              alt='img'
              className='slide_img'
            />
          )
        })} */}
        <EpisodeInfoContainer />
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
