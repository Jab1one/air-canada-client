import AeroplanMainBlock from "../../components/AeroplanMainBlock/AeroplanMainBlock"
import "./Everyday.scss"
import topnavbar from "../../assets/images/Nav Bar Aeroplan Home.svg";
import navbar from "../../assets/images/Customize my page.png";
import footer from "../../assets/images/Footer.svg"
import progress from "../../assets/images/Property 1=Variant3.png"

const Everyday = () => {
  return (
    <>
    <img src={topnavbar} alt=""></img>
    <img src={navbar} alt=""></img>
    <p className="custom-title">Customize my display</p>
    <AeroplanMainBlock 
    to="/"
    text="update"
    progress={progress}
    />
    <img src={footer} alt=""></img>
    </>
  )
}

export default Everyday;