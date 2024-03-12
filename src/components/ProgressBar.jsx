const ProgressBar = ({ percentage })=>{
  return(
    <div style={{
      display:"flex",
      background:"grey",
      color:"black",
      width:"60%",
      borderRadius:"5px"
    }}>
      <div style={{
          width:`${percentage}%`,
          background:"Yellow",
          textAlign:"center",
          borderRadius:"5px"
      }}>
         {percentage}%
      </div>
    </div>
  )
}

export default ProgressBar;