import { useQuery } from "@tanstack/react-query"

import "./SliderItem2.css"

import { rm_images } from "../../assets/images/R&M images/rm_images"
import { getRelatedEpisodes } from "../../api/api"
import { IEpisodeInfo } from "../types"
import { Link } from "react-router-dom"

export const SliderItem2 = ({ season }: any) => {
  // console.log(seasonNumber)
  const { data } = useQuery(["relatedEpisodes"], () =>
    getRelatedEpisodes(season)
  )
  return (
    <>
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
    </>
  )
}
