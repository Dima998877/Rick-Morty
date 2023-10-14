import Slider from "../Slider/Slider"

function LatestEpisodes({ episodesData }: any) {
  return (
    <div>
      <h2>Latest Episodes</h2>
      <Slider data={episodesData}></Slider>
    </div>
  )
}

export default LatestEpisodes
