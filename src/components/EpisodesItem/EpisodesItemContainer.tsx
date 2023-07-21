// import { useState } from "react"
import { ep_cover_images } from "../../assets/images/R&M images/seasons/ep_cover_images"
import EpisodesItem from "./EpisodesItem"

// const initialState = {
//   id: 1,
//   name: "Pilot",
//   air_date: "December 2, 2013",
//   episode: "S01E01",
//   characters: [
//     "https://rickandmortyapi.com/api/character/1",
//     "https://rickandmortyapi.com/api/character/2",
//     "https://rickandmortyapi.com/api/character/35",
//     "https://rickandmortyapi.com/api/character/38",
//     "https://rickandmortyapi.com/api/character/62",
//     "https://rickandmortyapi.com/api/character/92",
//     "https://rickandmortyapi.com/api/character/127",
//     "https://rickandmortyapi.com/api/character/144",
//     "https://rickandmortyapi.com/api/character/158",
//     "https://rickandmortyapi.com/api/character/175",
//     "https://rickandmortyapi.com/api/character/179",
//     "https://rickandmortyapi.com/api/character/181",
//     "https://rickandmortyapi.com/api/character/239",
//     "https://rickandmortyapi.com/api/character/249",
//     "https://rickandmortyapi.com/api/character/271",
//     "https://rickandmortyapi.com/api/character/338",
//     "https://rickandmortyapi.com/api/character/394",
//     "https://rickandmortyapi.com/api/character/395",
//     "https://rickandmortyapi.com/api/character/435",
//   ],
//   url: "https://rickandmortyapi.com/api/episode/1",
//   created: "2017-11-10T12:56:33.798Z",
// }
// export type IState = typeof initialState

function EpisodesItemContainer({
  name,
  date,
  episode,
}: {
  name: string
  date: string
  episode: string
}) {
  let i = Number(episode[2])
  let coverImg = ep_cover_images[i - 1]
  {
    return (
      <EpisodesItem
        name={name}
        date={date}
        episode={episode}
        coverImg={coverImg}
      />
    )
  }
}

export default EpisodesItemContainer
