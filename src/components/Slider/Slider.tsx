import React from "react"
import "./Slider.css"
// import { rm_images } from "../../assets/images/R&M images/rm_images"
import { useQuery } from "@tanstack/react-query"
import { getLast10Episodes } from "../../api/api"

interface ISliderProps {
  onHandleClick: (e: any) => void
  sliderRef: React.RefObject<HTMLDivElement>
  sliderImgRef: React.RefObject<HTMLImageElement>
}

const Slider: React.FC<ISliderProps> = ({
  onHandleClick,
  sliderRef,
  sliderImgRef,
}) => {
  const { data } = useQuery(["episode"], getLast10Episodes)
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
        {data?.map((episode: any) => {
          return (
            <div className='slide_img' ref={sliderImgRef} key={episode.id}>
              <span>{episode.name}</span>
              <span>{episode.episode}</span>
            </div>
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
