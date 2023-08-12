// import { useState } from "react"
import { ep_cover_images } from "../../assets/images/R&M images/seasons/ep_cover_images"
import EpisodesItem from "./EpisodesItem"
import { IEpisodeInfo } from "../types"

function EpisodesItemContainer({ id, name, air_date, episode }: IEpisodeInfo) {
  let episodeNumber = Number(episode[2])
  let coverImg = ep_cover_images[episodeNumber - 1]
  {
    return (
      <EpisodesItem
        id={id}
        name={name}
        air_date={air_date}
        episode={episode}
        coverImg={coverImg}
      />
    )
  }
}

export default EpisodesItemContainer
