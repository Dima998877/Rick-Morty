import { useQuery } from "@tanstack/react-query"
import { getEpisodeInfo } from "../api/api"

import "./EpisodeInfoItem.css"

import { rm_images } from "../assets/images/R&M images/rm_images"
import Slider from "../components/Slider/Slider"
import { SliderItem2 } from "../components/SliderItem2/SliderItem2"

function EpisodeInfoPage() {
  const episodeId = window.location.pathname.split("/")[2]
  const { data, status } = useQuery(["episodeInfo"], () =>
    getEpisodeInfo(episodeId)
  )

  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>
  const EpisodeInfoContent = () => {
    const season = data.episode.slice(0, 3)
    return (
      <>
        <h1>Episode Info</h1>
        <div className='episode_info_container'>
          <div className='episode_content'>
            <div className='image_container'>
              <img
                className='episode_image'
                src={rm_images[data.id]}
                alt='episode_image'
              ></img>
            </div>
            <div className='episode_text'>
              <div>{data.name}</div>
              <div>{data.air_date}</div>
              <div>{data.episode}</div>
            </div>
          </div>
          <h2>Related episodes</h2>
          <div>
            <Slider>
              <SliderItem2 season={season} />
            </Slider>
          </div>
        </div>
      </>
    )
  }
  return <EpisodeInfoContent />
}

export default EpisodeInfoPage
