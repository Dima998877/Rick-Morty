import { Idata } from "../../types"
import { Slider } from "../Slider/Slider"

type LatestEpisodesProps = {
  data: Idata
}
export const LatestEpisodes = ({ data }: LatestEpisodesProps) => {
  return (
    <>
      <h2>Latest Episodes</h2>
      <Slider data={data}></Slider>
    </>
  )
}
