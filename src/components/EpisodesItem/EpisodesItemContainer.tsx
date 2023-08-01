// import { useState } from "react"
import { ep_cover_images } from "../../assets/images/R&M images/seasons/ep_cover_images"
import EpisodesItem from "./EpisodesItem"

function EpisodesItemContainer({
  name,
  date,
  episode,
}: {
  name: string
  date: string
  episode: string
}) {
  let episodeNumber = Number(episode[2])
  let coverImg = ep_cover_images[episodeNumber - 1]
  {
    return (
      <EpisodesItem
        name={name}
        date={date}
        episode={episode}
        coverImg={coverImg}
      />
    )
  }
}

export default EpisodesItemContainer
