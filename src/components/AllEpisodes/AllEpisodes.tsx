import EpisodesItem from "../EpisodesItem/EpisodesItem"
import styles from "./AllEpisodes.module.css"
import { rm_images } from "../../assets/images/R&M images/rm_images"
function AllEpisodes() {
  return (
    <div className={styles.all_episodes}>
      {rm_images.map((imgUrl, index) => (
        <EpisodesItem img={imgUrl} key={index} />
      ))}
    </div>
  )
}

export default AllEpisodes
