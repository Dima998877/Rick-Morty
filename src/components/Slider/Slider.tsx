import React, { useRef } from "react"

import "./Slider.css"

import { Link } from "react-router-dom"
import { rm_images } from "../../assets/images/R&M images/rm_images"
import { IEpisodeInfo, Idata } from "../../types"

type SliderProps = {
  data: Idata
}

export const Slider = ({ data }: SliderProps) => {
  console.log(data)
  const ref = useRef<HTMLDivElement>(null)
  if (!data) return <div>Nothing to show</div>
  const onHandleClick = (e: React.SyntheticEvent) => {
    const handle = e.currentTarget
    if (ref === null || ref.current === null) return
    else if (handle.className.includes("right-handle")) {
      ref.current.scrollLeft += ref.current!.clientWidth / 4
    } else if (handle.className.includes("left-handle")) {
      ref.current.scrollLeft -= ref.current!.clientWidth / 4
    } else {
      console.log("no class")
    }
    console.log(ref.current.scrollLeft)
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
      <div className='slider' ref={ref}>
        {data?.map((episodeInfo: IEpisodeInfo, index: number) => {
          return (
            <div className='slider_item' key={episodeInfo.id}>
              <Link to={`/episodes/${episodeInfo.id}`}>
                <img src={rm_images[index]} alt='img' className='slider_img' />
                <p>{episodeInfo.name}</p>
                <p>{episodeInfo.episode}</p>
              </Link>
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
