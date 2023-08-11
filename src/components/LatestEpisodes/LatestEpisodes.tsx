import styles from "./LatestEpisodes.module.css"

import SliderContainer from "../Slider/SliderContainer"

function LatestEpisodes() {
  return (
    <div className={styles.latest_episodes}>
      <h2>Latest Episodes</h2>
      <SliderContainer />
    </div>
  )
}

export default LatestEpisodes
