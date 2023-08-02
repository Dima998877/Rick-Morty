import { useQueries } from "@tanstack/react-query"
import AllEpisodes from "../components/AllEpisodes/AllEpisodes"
// import EpisodesSorting from "../components/EpisodesSorting/EpisodesSorting"
import LatestEpisodes from "../components/LatestEpisodes/LatestEpisodes"
import { getEpisodes, getLast10Episodes } from "../api/api"

function EpisodesPage() {
  const [lastEpisodesQuery, episodesQuery] = useQueries({
    queries: [
      {
        queryKey: ["lastEpisodes"],
        queryFn: getLast10Episodes,
        staleTime: Infinity,
      },
      {
        queryKey: ["episodes"],
        queryFn: getEpisodes,
        keepPreviousData: true,
        getNextPageParam: (lastPage: any): number => {
          return lastPage.info.next ?? undefined
        },
      },
    ],
  })
  return (
    <div>
      <h1>Episodes</h1>
      <div>
        {/* <LatestEpisodes lastEpQuery={lastEpisodesQuery} /> */}
        {/* <EpisodesSorting /> */}
        <AllEpisodes episodesQuery={episodesQuery} />
      </div>
    </div>
  )
}

export default EpisodesPage
