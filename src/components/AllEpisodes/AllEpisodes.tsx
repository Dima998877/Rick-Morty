import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"

import styles from "./AllEpisodes.module.css"

import EpisodesItemContainer from "../EpisodesItem/EpisodesItemContainer"
import { getEpisodes } from "../../api/api"
import { IEpisodeInfo } from "../types"

const AllEpisodes = () => {
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["episodes"], getEpisodes, {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.info.next ?? undefined,
    })
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>

  return (
    <div className={styles.all_episodes_wrapper}>
      <h2>All episodes</h2>
      <div className={styles.all_episodes}>
        {data.pages.map((page) =>
          page.results.map((episode: IEpisodeInfo) => (
            <EpisodesItemContainer
              key={episode.id}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
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
