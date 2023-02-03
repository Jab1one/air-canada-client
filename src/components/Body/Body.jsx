import "./Body.scss";
import body from "../../assets/images/Home Screen Image.svg";
import PartnerCard from '../PartnerCard/PartnerCard';

export default function Body(){
    return(
        <>
        <PartnerCard />
        <img src={body} className="body"/>
        </>
    )
}