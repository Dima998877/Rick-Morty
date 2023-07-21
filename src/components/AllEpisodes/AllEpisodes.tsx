import styles from "./AllEpisodes.module.css"
import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"
import getEpisodes from "../../api/api"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

const AllEpisodes = () => {
  const [page, setPage] = useState(1)
  function prevPage() {
    if (page === 1) return
    setPage(page - 1)
  }
  function nextPage() {
    if (page === 3) return
    setPage(page + 1)
  }

  const { isLoading, error, data } = useQuery(
    ["episodes", page],
    () => getEpisodes(page),
    { keepPreviousData: true }
  )
  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return "An error has occurred: " + error.message
  if (!data) return <div>Nothing to show</div>
  return (
    <div className={styles.all_episodes_wrapper}>
      <div className={styles.all_episodes}>
        {data.map((episode: IEpisode) => (
          <EpisodesItemContainer
            key={episode.id}
            name={episode.name}
            date={episode.air_date}
            episode={episode.episode}
          />
        ))}
      </div>
      <div className={styles.all_episodes_nav}>
        <button onClick={prevPage}>&#8678; Back</button>
        <div>{page}</div>
        <button onClick={nextPage}>Forward &#8680;</button>
      </div>
    </div>
  )
}

export default AllEpisodes
