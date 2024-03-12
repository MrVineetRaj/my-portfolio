import { useContext } from 'react';
import Style from './component-css/HeroElement.module.css'
import { Mode } from '../Store/mode-store'

const HeroElement = ()=>{
  const {mode} = useContext(Mode)
  return (
    <>
      <div className={`${Style.heroElement} ${Style[mode]}`}>
        <div className={`${Style.left}`}>
          <h1>Hi ! I am Vineet Raj</h1>
          <p> passionate web developer with expertise in the MERN stack. From crafting interactive user interfaces with React to building robust APIs using Node.js and MongoDB, I thrive on turning ideas into functional, elegant solutions. When I’m not coding, you’ll find me exploring new technologies or sipping coffee at my favorite local café. Let’s create something amazing together!</p>
        </div>
        <div className={`${Style.right}`}>
          <img src="./src/assets/My photo.png" alt="Loading" />
        </div>
      </div>
    </>
  )
}

export default HeroElement;