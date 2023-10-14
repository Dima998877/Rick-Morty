import { useQuery } from "@tanstack/react-query"
import { getLast10Episodes } from "../api/api"
import AllEpisodes from "../components/AllEpisodes/AllEpisodes"
import LatestEpisodes from "../components/LatestEpisodes/LatestEpisodes"

function EpisodesPage() {
  const { data } = useQuery(["lastEpisodes"], getLast10Episodes)

  return (
    <>
      <h1>Episodes</h1>

      <LatestEpisodes data={data} />
      {/* <EpisodesSorting /> */}
      <AllEpisodes />
    </>
  )
}

export default EpisodesPage
