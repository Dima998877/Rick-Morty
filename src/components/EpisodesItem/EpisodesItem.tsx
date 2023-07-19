import styles from "./EpisodesItem.module.css"
import { IState } from "./EpisodesItemContainer"

function EpisodesItem({ img, state }: { img: string; state: IState }) {
  const { name, episode, air_date } = state
  return (
    <div className={styles.episodes_item}>
      <img src={img} alt='episode cover' />
      <h3>{name}</h3>
      <p>{episode}</p>
      <p>{air_date}</p>
    </div>
  )
}

export default EpisodesItem
