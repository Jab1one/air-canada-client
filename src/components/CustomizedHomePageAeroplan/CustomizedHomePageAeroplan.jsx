import "./CustomizedHomePageAeroplan.scss";
import CHPA_header from "../../assets/images/Nav Bar Aeroplan Home.svg"
import CHPA_navbar from "../../assets/images/Category Header Aeroplan Home.svg"
import CHPA_hero from "../../assets/images/CHPA_Hero.svg"
import CHPA_ad from "../../assets/images/CPHA_Ad.svg"
import to1 from "../../assets/images/travel_offer_1.svg"
import to2 from "../../assets/images/travel_offer_2.svg"
import to3 from "../../assets/images/travel_offer_3.svg"
import eo1 from "../../assets/images/eo1.svg"
import eo2 from "../../assets/images/eo2.svg"
import eo3 from "../../assets/images/eo3.svg"
import evo1 from "../../assets/images/evo1.svg"
import evo2 from "../../assets/images/evo2.svg"
import evo3 from "../../assets/images/evo3.svg"
import Footer from "../Footer/Footer";
import uh from "../../assets/images/unfilled_heart.svg"






export default function CustomizedHomePageAeroplan(){
    return(
        <section>
            <div className="CHPA">
            <img src={CHPA_header} />
            <img src={CHPA_navbar} />
            <img src={CHPA_hero} />
            </div>
            

            <section className="travel-offers">
                <h2 className="travel-offers__header">Travel offers:</h2>
                <div className="travel-offers__container">
                    
                    <div className="travel-offers__wrap">
                     <img src={to1} className="travel-offers__image" />
                        <img src={uh} className="travel-offers__icon" />
                    </div>

                    <div className="travel-offers__wrap">
                        <img src={to2} className="travel-offers__image" />
                        <img src={uh} className="travel-offers__icon" />
                    </div>

                    <div className="travel-offers__wrap">
                        <img src={to3} className="travel-offers__image" />
                        <img src={uh} className="travel-offers__icon" />
                    </div>
                    
                    
                </div>
            </section>

            <img src={CHPA_ad} />

            <section className="estore-offers">
                <h2 className="estore-offers__header">eStore offers:</h2>
                <div className="estore-offers__container">
                    <img src={eo1} className="estore-offers__image" />
                    <img src={eo2} className="estore-offers__image" />
                    <img src={eo3} className="estore-offers__image" />
                </div>
            </section>

            <section className="everyday-offers">
                <h2 className="everyday-offers__header">Everyday offers:</h2>
                <div className="everyday-offers__container">
                    <img src={evo1} className="everyday-offers__image" />
                    <img src={evo2} className="everyday-offers__image" />
                    <img src={evo3} className="everyday-offers__image" />
                </div>
            </section>

            <section className="link">
                <a href="">See More</a>
            </section>

            <Footer />

        </section>
    );
}