import { Link } from "react-router-dom"
import styles from "./EpisodesItem.module.css"
import { IEpisodeInfo } from "../types"

function EpisodesItem({ id, name, air_date, episode, coverImg }: IEpisodeInfo) {
  return (
    <div className={styles.episodes_item}>
      <Link to={`/episodes/${id}`}>
        <img src={coverImg} alt='episode cover' />
        <div className={styles.text_container}>
          <div className={styles.episode_title}>
            <h3>{name}</h3>
          </div>
          <p>{episode}</p>
          <p>{air_date}</p>
        </div>
      </Link>
    </div>
  )
}

export default EpisodesItem
