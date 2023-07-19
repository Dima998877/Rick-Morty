import { ReactNode, useRef } from "react"
import "./Slider.css"
import { rm_images } from "../../assets/images/R&M images/rm_images"

function Slider() {
  let slider = useRef<HTMLDivElement>(null)
  let slImg = useRef<HTMLImageElement>(null)
  const onHandleClick = (e: any) => {
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
    <div className='slider_wrap'>
      <div className='slider_container'>
        <button
          className='handle left-handle'
          onClick={(e) => {
            onHandleClick(e)
          }}
        >
          <div className='text'>&#8249;</div>
        </button>
        <div ref={slider} className='slider'>
          {rm_images.map((img, index) => {
            return (
              <img
                ref={slImg}
                src={img}
                alt='img'
                className='slide_img'
                key={index}
              />
            )
          })}
        </div>
        <button
          className='handle right-handle'
          onClick={(e) => {
            onHandleClick(e)
          }}
        >
          <div className='text'>&#8250;</div>
        </button>
      </div>
    </div>
  )
}

export default Slider
