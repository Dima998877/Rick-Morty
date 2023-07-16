import styles from "./LatestEpisodes.module.css"

import EpisodesItem from "../EpisodesItem/EpisodesItem"
import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"

function LatestEpisodes() {
  return (
    <div className='container'>
      <div className={styles.latest_episodes}>
        <EpisodesItemContainer />
        <EpisodesItemContainer />
        <EpisodesItemContainer />
        <EpisodesItemContainer />
        <EpisodesItemContainer />
      </div>
    </div>
  )
}

export default LatestEpisodes
