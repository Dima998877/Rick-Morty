import styles from "./LatestEpisodes.module.css"

import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"

function LatestEpisodes() {
  return (
    <div className={styles.latest_episodes}>
      <EpisodesItemContainer />
      <EpisodesItemContainer />
      <EpisodesItemContainer />
      <EpisodesItemContainer />
      <EpisodesItemContainer />
    </div>
  )
}

export default LatestEpisodes
