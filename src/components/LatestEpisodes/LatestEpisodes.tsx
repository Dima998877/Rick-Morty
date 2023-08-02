import styles from "./LatestEpisodes.module.css"

import SliderContainer from "../Slider/SliderContainer"
import { useQuery } from "@tanstack/react-query"
import { getLast10Episodes } from "../../api/api"

function LatestEpisodes(props: any) {
  const { data } = props.lastEpQuery

  console.log(data)
  return (
    <div className={styles.latest_episodes}>
      <h2>Latest Episodes</h2>
      <SliderContainer />
    </div>
  )
}

export default LatestEpisodes
