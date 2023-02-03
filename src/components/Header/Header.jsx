import "./Header.scss";
import header from "../../assets/images/Nav Bar AIr Canada Home.svg";

export default function Header(){
    return(
        <>
        <img src={header} className="header"/>
        </>
    )
}