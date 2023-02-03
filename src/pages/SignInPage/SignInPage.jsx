import "./SignInPage.scss"
import ASIH from "../../assets/images/Aeroplan sign in.svg"

export default function SignInPage(){
    return(
        <section className="sign-in-page">
            <img src={ASIH} className="sign-in-page__header" />

        </section>
      

    );
}