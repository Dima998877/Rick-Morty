import React, { PropsWithChildren, useRef } from "react"

import "./Slider.css"
const Slider = (props: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null)
  if (!props) return <div>Nothing to show</div>
  const onHandleClick = (e: React.SyntheticEvent) => {
    const handle = e.currentTarget
    if (ref === null || ref.current === null) return
    else if (handle.className.includes("right-handle")) {
      ref.current.scrollLeft += ref.current!.clientWidth / 4
    } else if (handle.className.includes("left-handle")) {
      ref.current.scrollLeft -= ref.current!.clientWidth / 4
    } else {
      console.log("no class")
    }
    console.log(ref.current.scrollLeft)
  }

  return (
    <div className='slider_container'>
      <button
        className='handle left-handle'
        onClick={(e) => {
          onHandleClick(e)
        }}
      >
        <div className='text'>&#8249;</div>
      </button>
      <div className='slider' ref={ref}>
        {props.children}
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
  )
}

export default Slider
