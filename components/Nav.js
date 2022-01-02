import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { BsSearch, BsFillMenuButtonWideFill}  from "react-icons/bs";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      
      
      <div className={navStyles.nav}>
        <BsFillMenuButtonWideFill/> 
      </div>
      {/* <div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div> */}
      <div className={navStyles.nav}>
        <h1 >
          TechArticulos
        </h1>
      </div>
      <div className={navStyles.nav}>
        <BsSearch/>
        
      </div>
      
    </nav>
  )
}

export default Nav
