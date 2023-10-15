import axios from "axios"
import { IEpisodeInfo } from "../types"

const baseUrl = "https://rickandmortyapi.com/api/"

export async function getEpisodes({ pageParam = `${baseUrl}episode?page=1` }) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
export async function getRelatedEpisodes(
  season: string
): Promise<IEpisodeInfo[]> {
  const { data } = await axios.get(`${baseUrl}episode?page=1&episode=${season}`)
  return data.results
}
export async function getLast10Episodes(): Promise<IEpisodeInfo[]> {
  const { data } = await axios.get(`${baseUrl}episode`)
  const lastEpId = data.info.count
  const last10Episodes = Array.from(Array(lastEpId + 1).keys())
  const epInfoArr = last10Episodes.reverse().slice(0, 10).join(",")
  const { data: data2 } = await axios.get(`${baseUrl}episode/${epInfoArr}`)
  return data2.reverse()
}
export async function getEpisodeInfo(episodeId: string | number) {
  const { data } = await axios.get(`${baseUrl}episode/${episodeId}`)
  return data
}
export async function getLocations({
  pageParam = `${baseUrl}location?page=1`,
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
export async function getCharacters({
  pageParam = `${baseUrl}character?page=1`,
}) {
  const { data } = await axios.get(`${pageParam}`)
  return data
}
