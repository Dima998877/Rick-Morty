import logo from "../../assets/images/logo.png"

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <nav>
        <ul>
          <li>EPISODES</li>
          <li>CHARACTERS</li>
          <li>LOCATIONS</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
