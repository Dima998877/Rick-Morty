// import { useState } from "react"
import EpisodeInfo from "./EpisodeInfo"

// id: number
// name: string
// date: string
// episode: string
// created?: string
// characters?: string[]

function EpisodeInfoContainer() {
  return (
    <EpisodeInfo
      id={1}
      name={"bob"}
      date={"date"}
      episode={"episode"}
      coverImg={"coverImg"}
    />
  )
}

export default EpisodeInfoContainer
