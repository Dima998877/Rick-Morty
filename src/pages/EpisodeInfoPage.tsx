import { useQuery } from "@tanstack/react-query"
import { getEpisodeInfo } from "../api/api"

import "./EpisodeInfoItem.css"

import Slider from "../components/Slider/Slider"
import { EpisodeInfoContent } from "../components/EpisodeInfoContent/EpisodeInfoContent"

function EpisodeInfoPage() {
  const episodeId = window.location.pathname.split("/")[2]
  const { data, status } = useQuery(["episodeInfo"], () =>
    getEpisodeInfo(episodeId)
  )
  console.log(data)
  const season = data.episode.slice(0, 3)
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>

  return (
    <>
      <EpisodeInfoContent data={data} />
      <h2>Related episodes</h2>
      <div>
        <Slider data={season}></Slider>
      </div>
    </>
  )
}

export default EpisodeInfoPage
