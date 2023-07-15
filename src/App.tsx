import { Routes, Route } from "react-router-dom"

import "./App.css"
import Header from "./components/Header/Header"
import CharactersPage from "./pages/CharactersPage"
import EpisodesPage from "./pages/EpisodesPage"
import LocationsPage from "./pages/LocationsPage"

function App() {
  return (
    <div className='app_wrapper'>
      <Header />
      <div className='content_wrapper'>
        <Routes>
          <Route path='/' element={<EpisodesPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
