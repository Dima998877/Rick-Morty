import AllEpisodes from "../components/AllEpisodes/AllEpisodes"
import LatestEpisodes from "../components/LatestEpisodes/LatestEpisodes"

function EpisodesPage() {
  return (
    <>
      <h1>Episodes</h1>

      <LatestEpisodes />
      {/* <EpisodesSorting /> */}
      <AllEpisodes />
    </>
  )
}

export default EpisodesPage
