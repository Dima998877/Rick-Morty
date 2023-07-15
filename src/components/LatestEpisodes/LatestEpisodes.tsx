import styles from "./LatestEpisodes.module.css"

function LatestEpisodes() {
  return (
    <div className='container'>
      <div className={styles.latest_episodes}>
        <div className={styles.episodes_item}></div>
        <div className={styles.episodes_item}></div>
        <div className={styles.episodes_item}></div>
        <div className={styles.episodes_item}></div>
        <div className={styles.episodes_item}></div>
      </div>
    </div>
  )
}

export default LatestEpisodes
