import { useRef } from "react"
import Slider from "./Slider"

function SliderContainer() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderImgRef = useRef<HTMLImageElement>(null)
  const onHandleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const handle = e.currentTarget
    console.log(handle.className)
    if (sliderRef.current === null) return
    if (handle.className.includes("right-handle")) {
      sliderRef.current.scrollLeft += sliderImgRef.current!.clientWidth
    } else if (handle.className.includes("left-handle")) {
      sliderRef.current.scrollLeft -= sliderImgRef.current!.clientWidth
    } else {
      console.log("no class")
    }
  }

  return (
    <Slider
      onHandleClick={onHandleClick}
      sliderRef={sliderRef}
      sliderImgRef={sliderImgRef}
    />
  )
}

export default SliderContainer
