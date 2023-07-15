import styles from "./Header.module.css"
import logoImg from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logoImg} alt='logo' />
        </Link>
      </div>
      <nav>
        <Link to='/'>EPISODES</Link>
        <Link to='/characters'>CHARACTERS</Link>
        <Link to='/locations'>LOCATIONS</Link>
      </nav>
    </header>
  )
}

export default Header
