import styles from "./EpisodesItem.module.css"

function EpisodesItem({
  name,
  date,
  episode,
  coverImg,
}: {
  name: string
  date: string
  episode: string
  coverImg: string
}) {
  return (
    <div className={styles.episodes_item}>
      <img src={coverImg} alt='episode cover' />
      <div className={styles.text_container}>
        <div className={styles.episode_title}>
          <h3>{name}</h3>
        </div>
        <p>{episode}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default EpisodesItem
