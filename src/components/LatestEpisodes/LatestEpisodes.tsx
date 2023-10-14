import Slider from "../Slider/Slider"
import SliderItem from "../SliderItem/SliderItem"

function LatestEpisodes({ data }) {
  return (
    <>
      <h2>Latest Episodes</h2>
      <Slider data={data}></Slider>
    </>
  )
}

export default LatestEpisodes
