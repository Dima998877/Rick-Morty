import { useQuery } from "@tanstack/react-query"
import EpisodesItemContainer from "../components/EpisodesItem/EpisodesItemContainer"
import { getEpisodeInfo } from "../api/api"
import { useParams } from "react-router-dom"

function EpisodeInfoPage() {
  const { epId } = useParams()

  const {
    data,
    isLoading,
    isError,
  }: { data: any; isLoading: boolean; isError: boolean } = useQuery(
    ["episode"],
    () => {
      if (!epId) return null
      return getEpisodeInfo(epId)
    }
  )
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error has occurred</div>
  return (
    <EpisodesItemContainer
      key={data.id}
      id={data.id}
      name={data.name}
      date={data.air_date}
      episode={data.episode}
      created={data.created}
      characters={data.characters}
    />
  )
}

export default EpisodeInfoPage
