import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"

import styles from "./AllEpisodes.module.css"

import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"

export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

const AllEpisodes = (props: any) => {
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    props.episodesQuery
  console.log(data)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>

  return (
    <div className={styles.all_episodes_wrapper}>
      <div className={styles.all_episodes}>
        {data?.pages.map((page: any) =>
          page.results.map((episode: IEpisode) => (
            <EpisodesItemContainer
              key={episode.id}
              id={episode.id}
              name={episode.name}
              date={episode.air_date}
              episode={episode.episode}
            />
          ))
        )}
      </div>
      <button
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load Newer"
          : "Nothing more to load"}
      </button>
    </div>
  )
}

export default AllEpisodes
