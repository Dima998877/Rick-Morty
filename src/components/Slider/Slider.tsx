import React from "react"
import { useQuery } from "@tanstack/react-query"

import "./Slider.css"

import { rm_images } from "../../assets/images/R&M images/rm_images"
import { getLast10Episodes } from "../../api/api"
import { IEpisodeInfo, ISliderItemProps, ISliderProps } from "../types"

const SliderItem: React.FC<ISliderItemProps> = ({
  sliderRef,
  sliderImgRef,
}) => {
  const { data } = useQuery(["lastEpisodes"], getLast10Episodes)
  return (
    <div ref={sliderRef} className='slider'>
      {data?.map((episodeInfo: IEpisodeInfo, index: number) => {
        return (
          <div className='slide' ref={sliderImgRef} key={episodeInfo.id}>
            <img src={rm_images[index]} alt='img' className='slide_img' />
            <p>{episodeInfo.name}</p>
            <p>{episodeInfo.episode}</p>
          </div>
        )
      })}
    </div>
  )
}
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
