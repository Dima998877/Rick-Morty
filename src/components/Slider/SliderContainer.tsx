import { useRef } from "react"
import Slider from "./Slider"

function SliderContainer() {
  const slider = useRef<HTMLDivElement>(null)
  const slImg = useRef<HTMLImageElement>(null)
  const onHandleClick = (e: React.SyntheticEvent) => {
    const handle = e.currentTarget
    if (slider.current === null) return
    else if (handle.className.includes("right-handle")) {
      slider.current.scrollLeft += slImg.current!.clientWidth
    } else if (handle.className.includes("left-handle")) {
      slider.current.scrollLeft -= slImg.current!.clientWidth
    } else {
      console.log("no class")
    }
  }

  return (
    <Slider
      onHandleClick={onHandleClick}
      sliderRef={slider}
      sliderImgRef={slImg}
    />
  )
}

export default SliderContainer
