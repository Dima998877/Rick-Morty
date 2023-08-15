import axios from "axios"
import { IEpisodeInfo } from "../components/types"

export async function getEpisodes({
  pageParam = "https://rickandmortyapi.com/api/episode?page=1",
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
export async function getRelatedEpisodes(): Promise<IEpisodeInfo[]> {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode?page=1&episode=S03`
  )
  return data.results
}
export async function getLast10Episodes(): Promise<IEpisodeInfo[]> {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode")
  const lastEpId = data.info.count
  const last10Episodes = Array.from(Array(lastEpId + 1).keys())
  const epInfoArr = last10Episodes.reverse().slice(0, 10).join(",")
  const { data: data2 } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${epInfoArr}`
  )
  return data2
}
export async function getEpisodeInfo(episodeId: string | number) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${episodeId}`
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
