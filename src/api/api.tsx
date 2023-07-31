import axios from "axios"

async function getEpisodes({
  pageParam = "https://rickandmortyapi.com/api/episode?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}

export default getEpisodes
