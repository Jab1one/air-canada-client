import AeroplanMainBlock from "../../components/AeroplanMainBlock/AeroplanMainBlock"
import "./Everyday.scss"
import topnavbar from "../../assets/images/Nav Bar Aeroplan Home.svg";
import navbar from "../../assets/images/Customize my page.png";
import footer from "../../assets/images/Footer.svg"
import progress from "../../assets/images/Property 1=Variant3.png"
import PartnerCard from "../../components/PartnerCard/PartnerCard";
import { Link } from "react-router-dom";


const Everyday = () => {
  return (
    <>
    <img src={topnavbar} alt=""></img>
    <img src={navbar} alt=""></img>
    <p className="custom-title">Customize my display</p>
    <div className="mainBlock">
    <img src={progress} alt="" className="mainBlock__progress"></img>
    <p className="mainBlock__title">Time to Personalize your page</p>
    <div className="mainBlock__component-container">
    <PartnerCard />
    </div>
    <Link to="/everyday" className="customize-button"><p className="button-text" >Update</p></Link>
   </div>
    <img src={footer} alt=""></img>
    </>
  )
}

export default Everyday;