import { Link } from "react-router-dom"
import styles from "./EpisodesItem.module.css"
import { IEpisodeInfo } from "../../types"
import { ep_cover_images } from "../../assets/images/R&M images/seasons/ep_cover_images"

function EpisodesItem({ id, name, air_date, episode }: IEpisodeInfo) {
  const episodeNumber = Number(episode[2])
  const coverImg = ep_cover_images[episodeNumber - 1]
  {
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
}
export default EpisodesItem
