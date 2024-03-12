import Style from './component-css/ProjectsDiv.module.css'
const ProjectsDiv = () => {
  return (
    <>
      <div className={`${Style.container}`}> {/*Here i want to add on e animation such that gradiant color changes smoothly for its background */}
        <h1>My Projects</h1>
        <h2>biteCounter web Application</h2>
        <div className={`${Style.project}`}>
          <div className={`${Style.aboutProject}`}>
              <p>1. Used MERN( MongoDB , Express  JS , React JS ,Node JS) stack</p>
              <p>
              2. Application that counts calorie and displays it for every meal</p>
              <p>
              3. Used calorieninja free tier API</p>
              <p>
              4. Also Added user Authentication using JWT</p>
              <p>
              5. Learning  : How to use external API with my Rest- APIs</p>
          </div>
          <div className={`${Style.liveLink}`}>
            <iframe src="https://bitecounter.netlify.com" frameborder="0"></iframe>
          </div>
        </div>
        
        <h2>My Portfolio React App</h2>
        <div className={`${Style.project}`}>
          <div className={`${Style.liveLink}`}>
            <iframe src="https://bitecounter.netlify.com" frameborder="0"></iframe>
          </div>
          <div className={`${Style.aboutProject}`}>
              <p>1. Used Reactjs</p>
              <p>2. Web App. that can be used my resume representing all of my skills and projects</p>
              <p>3. Learning  : How to create visually appealing and optimized React App</p>



          </div>
        </div>

        <h2>Task-Management-API</h2>
        <div className={`${Style.project}`}>
          <div className={`${Style.aboutProject}`}>
            
              <p>
                1. Used MongoDB , Express and Node JS</p>
              <p>
                2. Web App. that keep tasks entered by user</p>
              <p>
                3. Also Added user Authentication using JWT</p>
              <p>
                4. Learning  : How to create Rest APIs , How to manage system for user Authentication using JWT</p>
          </div>
          <div className={`${Style.liveLink}`}>
          <iframe src="https://github.com/MrVineetRaj/Backend-development"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsDiv;