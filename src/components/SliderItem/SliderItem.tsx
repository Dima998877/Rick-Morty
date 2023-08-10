import React from "react"
import { useQuery } from "@tanstack/react-query"

import "./SliderItem.css"

import { rm_images } from "../../assets/images/R&M images/rm_images"
import { getLast10Episodes } from "../../api/api"
import { IEpisodeInfo, ISliderItemProps } from "../types"

export const SliderItem: React.FC<ISliderItemProps> = ({
  sliderImgRef: sliderItemRef,
}) => {
  const { data } = useQuery(["lastEpisodes"], getLast10Episodes)
  return (
    <>
      {data?.map((episodeInfo: IEpisodeInfo, index: number) => {
        return (
          <div
            className='slider_item_content'
            ref={sliderItemRef}
            key={episodeInfo.id}
          >
            <img src={rm_images[index]} alt='img' className='slider_img' />
            <p>{episodeInfo.name}</p>
            <p>{episodeInfo.episode}</p>
          </div>
        )
      })}
    </>
  )
}
