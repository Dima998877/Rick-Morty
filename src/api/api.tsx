import axios from "axios"

export async function getEpisodes({
  pageParam = "https://rickandmortyapi.com/api/episode?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
export async function getLast10Episodes({}) {}
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
