import { useQuery } from "@tanstack/react-query"
import { getEpisodeInfo, getRelatedEpisodes } from "../api/api"
import { useParams } from "react-router-dom"

import "./EpisodeInfoItem.css"

import { rm_images } from "../assets/images/R&M images/rm_images"
import Slider from "../components/Slider/Slider"
import { EpisodeInfoContent } from "../components/EpisodeInfoContent/EpisodeInfoContent"

function EpisodeInfoPage() {
  const { id: episodeId } = useParams()
  const { data, status } = useQuery(["episodeInfo", episodeId], () =>
    getEpisodeInfo(episodeId)
  )
  let season = data?.episode.slice(0, 3)

  let { data: data2 } = useQuery({
    queryKey: ["relatedEpisodes", season],
    queryFn: () => getRelatedEpisodes(season),
    enabled: !!season,
  })
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>

  return (
    <>
      <EpisodeInfoContent data={data} rm_images={rm_images} />
      <h2>Related episodes</h2>
      <div>
        <Slider data={data2}></Slider>
      </div>
    </>
  )
}

export default EpisodeInfoPage
