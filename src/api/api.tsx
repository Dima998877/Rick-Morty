import axios from "axios"

export async function getEpisodes({
  pageParam = "https://rickandmortyapi.com/api/episode?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}

export async function getLast10Episodes() {
  const response = await axios.get("https://rickandmortyapi.com/api/episode")
  const lastEpisodeId = response.data.info.count
  const last10EpId = Array.from(Array(lastEpisodeId + 1).keys())
    .slice(lastEpisodeId - 10)
    .join(",")

  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${last10EpId}`
  )
  return data
}
export async function getEpisodeInfo(id: string) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${id}`
  )
  return data
}
export async function getLocations({
  pageParam = "https://rickandmortyapi.com/api/location?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
export async function getCharacters({
  pageParam = "https://rickandmortyapi.com/api/character?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
