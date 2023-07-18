import { useRef } from "react"
import "./Slider.css"
function Slider() {
  useRef()
  const onHandleClick = (e: any) => {
    const handle = e.currentTarget
    if (handle.className.includes("right-handle")) {
      console.log(e.currentTarget.nextElementSibling)
    } else if (handle.className.includes("left-handle")) {
      console.log("left")
    } else {
      console.log("no class")
    }
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
      <div className='slider'>
        <img src='https://via.placeholder.com/210/00FF88?text=1' />
        <img src='https://via.placeholder.com/220/00FF88?text=2' />
        <img src='https://via.placeholder.com/230/00FF88?text=3' />
        <img src='https://via.placeholder.com/240/00FF88?text=4' />
        <img src='https://via.placeholder.com/250/00FF88?text=5' />
        <img src='https://via.placeholder.com/260/00FF88?text=6' />
        <img src='https://via.placeholder.com/270/00FF88?text=7' />
        <img src='https://via.placeholder.com/280/00FF88?text=8' />
        <img src='https://via.placeholder.com/290/00FF88?text=9' />
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
