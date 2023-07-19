import styles from "./EpisodesItem.module.css"
function EpisodesItem({ img }: { img: string }) {
  return (
    <div className={styles.episodes_item}>
      <img src={img} alt='episode cover' />
    </div>
  )
}

export default EpisodesItem
