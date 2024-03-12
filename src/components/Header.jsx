import { useContext, useState } from 'react';
import Style from './component-css/Header.module.css'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { Mode } from '../Store/mode-store';

const Header = () => {
  const { mode, onDarkMode, offDarkMode } = useContext(Mode)
  
  const [displayNav,setDisplayNav] = useState('inactive');
  return (
    <div className={`${Style.header} ${Style[mode]}`}>
      <div className={`${Style.left}`}>
        <p>Vineet's Portfolio</p>
      </div>
      <div className={`${Style.right}`}>
        <div className={`${Style.toggleButtons}`}>
          {mode == "dark" && <FaToggleOn onClick={() => { offDarkMode() }} />}
          {mode == "light" && <FaToggleOff onClick={() => { onDarkMode() }} />}
        </div>
        <div className={`${Style.hamBurger}`}>
          {displayNav === 'inactive' && <GiHamburgerMenu onClick={()=>{setDisplayNav('active')}} />}
          {displayNav === 'active' &&<ImCross  onClick={()=>{setDisplayNav('inactive')}}/>}
        </div>
        <nav className={`${Style.navBar} ${Style[displayNav]} ${Style[mode]}`}>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact Me</li>
        </nav>
      </div>
    </div>
  )
}

export default Header;