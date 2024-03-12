import Style from './component-css/EducationDiv.module.css'

const EduactionDiv = () => {
  return (
    <>
        <h1>Eduaction</h1>
      <div className={`${Style.container}`}>
        <div>
          <h3>Govt. Boys Sr. Sec. School No1 , Samalka </h3>
          <p>(2021)</p>
          <nav>
            <li><span>12<sup>th</sup> Class</span> <span>- 88.8%</span></li>
            <li><span>10<sup>th</sup> Class</span> <span>- 85.6%</span></li>
          </nav>
        </div>
        <div>
          <h3>Physics Wallah ( Coaching Center )</h3>
          <p>( 2021 - 2022 )</p>
          <nav>
            <li><span>JEE mains  </span> <span>- 96 percentile</span></li>
          </nav>
        </div>
        <div>
          <h3>Netaji Subhas University of Technology</h3>
          <p>( 2022 - 2026 )</p>
          <nav>
            <li><span>Semester - 1 </span> <span>- 7.0 cgpa</span></li>
            <li><span>Semester - 2 </span> <span>- 6.0 cgpa</span></li>
            <li><span>Semester - 3 </span> <span>- 5.6 cgpa</span></li>
            <li><span>Overall</span> <span>- 6.19 cgpa</span></li>
          </nav>
        </div>
      </div>
    </>
  )
}

export default EduactionDiv;