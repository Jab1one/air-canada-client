import AeroplanMainBlock from "../../components/AeroplanMainBlock/AeroplanMainBlock"
import "./customaeroplan.scss"
import topnavbar from "../../assets/images/Nav Bar Aeroplan Home.svg";
import navbar from "../../assets/images/Customize my page.png";
import footer from "../../assets/images/Footer.svg"
import progress from "../../assets/images/Property 1=Default.png"

const CustomAeroplan = () => {
  return (
    <>
    <img src={topnavbar} alt=""></img>
    <img src={navbar} alt=""></img>
    <p className="custom-title">Customize my display</p>
    <AeroplanMainBlock
    to="/travel"
    text="Next"
    progress={progress}
    />
    <img src={footer} alt=""></img>
    </>
  )
}

export default CustomAeroplan;