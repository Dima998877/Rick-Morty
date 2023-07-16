import EpisodesItem from "./EpisodesItem"
import { rm_images } from "../../assets/images/R&M images/rm_images"

export type EpisodesItemPropsType = {
  img: number | string
  title: string
}

function EpisodesItemContainer() {
  const img = rm_images[1]
  // console.log(img)
  const title = "cover image"

  return <EpisodesItem img={img} />
}

export default EpisodesItemContainer
