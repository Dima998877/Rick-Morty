import styles from "./AllEpisodes.module.css"
import { rm_images } from "../../assets/images/R&M images/rm_images"
import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"
function AllEpisodes() {
  return (
    <div className={styles.all_episodes}>
      {rm_images.map((imgUrl, index) => (
        <EpisodesItemContainer img={imgUrl} key={index} />
      ))}
    </div>
  )
}

export default AllEpisodes
