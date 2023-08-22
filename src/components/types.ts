export interface IEpisodeInfo {
  id: number
  name: string
  air_date: string
  episode: string
  characters?: string[]
  url?: string
  created?: string
  coverImg?: string
}
export interface ISliderProps {
  onHandleClick: (e: React.SyntheticEvent) => void
  sliderRef: React.RefObject<HTMLDivElement>
  sliderImgRef: React.RefObject<HTMLImageElement>
}
