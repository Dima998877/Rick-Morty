import styles from "./EpisodesSorting.module.css"

function EpisodesSorting() {
  return (
    <div className='container'>
      <div className={styles.episodes_sorting}>
        <div className={styles.sorting_item}>Sort by</div>
      </div>
    </div>
  )
}

export default EpisodesSorting
