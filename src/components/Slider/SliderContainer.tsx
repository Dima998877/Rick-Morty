import { useRef, MouseEvent } from "react"
import Slider from "./Slider"

function SliderContainer() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderImg = useRef<HTMLImageElement>(null)
  const onHandleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const handle = e.currentTarget
    if (sliderRef.current === null) return
    if (handle.className.includes("right-handle")) {
      sliderRef.current.scrollLeft += sliderImg.current!.clientWidth
    } else if (handle.className.includes("left-handle")) {
      sliderRef.current.scrollLeft -= sliderImg.current!.clientWidth
    } else {
      console.log("no class")
    }
  }

  return <Slider onHandleClick={onHandleClick} sliderRef={sliderRef} />
}

export default SliderContainer
