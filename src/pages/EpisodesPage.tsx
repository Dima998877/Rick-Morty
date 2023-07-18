import AllEpisodes from "../components/AllEpisodes/AllEpisodes"
import EpisodesSorting from "../components/EpisodesSorting/EpisodesSorting"
import LatestEpisodes from "../components/LatestEpisodes/LatestEpisodes"

function EpisodesPage() {
  return (
    <div className='episodes_page container'>
      <h1>Episodes</h1>
      <div className='content_container'>
        <LatestEpisodes />
        <EpisodesSorting />
        <AllEpisodes />
      </div>
    </div>
  )
}

export default EpisodesPage
