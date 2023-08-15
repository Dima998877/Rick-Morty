import React from "react"
import { useQuery } from "@tanstack/react-query"

import "./SliderItem2.css"

import { rm_images } from "../../assets/images/R&M images/rm_images"
import { getRelatedEpisodes } from "../../api/api"
import { IEpisodeInfo, ISliderItemProps } from "../types"
import { Link } from "react-router-dom"

export const SliderItem2: React.FC<ISliderItemProps> = ({
  sliderRef,
  sliderImgRef,
}) => {
  const { data } = useQuery(["relatedEpisodes"], () =>
    getRelatedEpisodes("SO3")
  )
  console.log(data)
  return (
    <div ref={sliderRef} className='slider'>
      {data?.map((episodeInfo: IEpisodeInfo, index: number) => {
        return (
          <div className='slider_item' ref={sliderImgRef} key={episodeInfo.id}>
            <Link to={`/episodes/${episodeInfo.id}`}>
              <img src={rm_images[index]} alt='img' className='slider_img' />
              <p>{episodeInfo.name}</p>
              <p>{episodeInfo.episode}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
