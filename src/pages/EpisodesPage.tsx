import AllEpisodes from "../components/AllEpisodes/AllEpisodes"
import LatestEpisodes from "../components/LatestEpisodes/LatestEpisodes"

function EpisodesPage() {
  return (
    <div>
      <h1>Episodes</h1>
      <div>
        <LatestEpisodes />
        {/* <EpisodesSorting /> */}
        <AllEpisodes />
      </div>
    </div>
  )
}

export default EpisodesPage
