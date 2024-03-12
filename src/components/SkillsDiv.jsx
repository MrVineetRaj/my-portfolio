import ProgressBar from './ProgressBar';
import Style from './component-css/SkillsDiv.module.css'

const SkillsDiv = () => {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className={`${Style.skills}`}>
          <h1>Skills</h1>
          <ul>
            <li><div className={`${Style.skill}`}>MongoDb <ProgressBar percentage={90} /></div></li>
            <li><div className={`${Style.skill}`}>Express Js <ProgressBar percentage={85} /></div></li>
            <li><div className={`${Style.skill}`}>Node JS <ProgressBar percentage={65} /></div></li>
            <li><div className={`${Style.skill}`}>React<ProgressBar percentage={70} /></div></li>
            <li><div className={`${Style.skill}`}>C++<ProgressBar percentage={80} /></div></li>
            <li><div className={`${Style.skill}`}>Problem Solving<ProgressBar percentage={80} /></div></li>
            <li><div className={`${Style.skill}`}>Java Script<ProgressBar percentage={75} /></div></li>
            <li><div className={`${Style.skill}`}>DSA ( with c++ )<ProgressBar percentage={80} /></div></li>
          </ul>
        </div>
        <div className={`${Style.languages}`}>
          <h1>Language I can Speak</h1>
            <ul>
              <li><div className={`${Style.language}`}>English <ProgressBar percentage={75} /></div></li>
              <li><div className={`${Style.language}`}>Hindi<ProgressBar percentage={90} /></div></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default SkillsDiv;