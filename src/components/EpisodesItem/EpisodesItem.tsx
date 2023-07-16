import { PropsWithChildren } from "react"
import styles from "./EpisodesItem.module.css"
import { EpisodesItemPropsType } from "./EpisodesItemContainer"
import { rm_images } from "../../assets/images/R&M images/rm_images"

function EpisodesItem({ img }) {
  return (
    <div className={styles.episodes_item}>
      <img src={img} alt='' />
    </div>
  )
}

export default EpisodesItem
