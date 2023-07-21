import axios from "axios"

async function getEpisodes(page: number) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  )
  return data.results
}

export default getEpisodes
