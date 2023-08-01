import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"

import styles from "./AllEpisodes.module.css"

import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"
import { getEpisodes } from "../../api/api"

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
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  const {
    data,
    status,
    fetchPreviousPage,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["episodes"], getEpisodes, {
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage.info.next ?? undefined,
  })
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>

  return (
    <div className={styles.all_episodes_wrapper}>
      <div className={styles.all_episodes}>
        {data.pages.map((page) =>
          page.results.map((episode: IEpisode) => (
            <EpisodesItemContainer
              key={episode.id}
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
