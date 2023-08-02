// import { useState } from "react"
import { ep_cover_images } from "../../assets/images/R&M images/seasons/ep_cover_images"
import EpisodesItem from "./EpisodesItem"

function EpisodesItemContainer({
  id,
  name,
  date,
  episode,
}: {
  id: number
  name: string
  date: string
  episode: string
  created?: string
  characters?: string[]
}) {
  let seasonNumber = Number(episode[2])
  let coverImg = ep_cover_images[seasonNumber - 1]
  {
    return (
      <EpisodesItem
        id={id}
        name={name}
        date={date}
        episode={episode}
        coverImg={coverImg}
      />
    )
  }
}

export default EpisodesItemContainer
