export const EpisodeInfoContent = ({ data, rm_images }) => {
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
      </div>
    </>
  )
}
