import "./AeroplanMainBlock.scss";
import { Link } from "react-router-dom";
import PartnerCard from "../PartnerCard/PartnerCard";
import DragAndDrop from "../DragAndDrop/DragAndDrop";



const AeroplanMainBlock = (props)=> {
  return (
   <div className="mainBlock">
    <img src={props.progress} alt="" className="mainBlock__progress"></img>
    <p className="mainBlock__title">Time to Personalize your page</p>
    <div className="mainBlock__component-container">
    <DragAndDrop />
    </div>
    <Link to={props.to} className="customize-button"><p className="button-text" >{props.text}</p></Link>
   </div>
  )
}

export default AeroplanMainBlock;