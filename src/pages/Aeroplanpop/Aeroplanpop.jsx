import "./Aeroplanpop.scss"
import { Link } from "react-router-dom";
import profile from "../../assets/images/Profile.png"

const Aeroplanpop = ()=> {
  return (
    <>
    <div className="background-container">
      <img src={profile} className="popup"></img>
    </div>
    <Link to="/customize" className="poplink"></Link>
      </>
  )
}
export default Aeroplanpop;