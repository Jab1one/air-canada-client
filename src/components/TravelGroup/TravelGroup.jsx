import PartnerCard from '../PartnerCard/PartnerCard';
import './TravelGroup.scss';
import avis from '../../assets/images/avis.svg';
import card1 from '../../assets/images/card1.svg';
import card2 from '../../assets/images/card2.svg';
import budget from '../../assets/images/budget.svg';
import bestwest from '../../assets/images/bestwest.svg';
import fairmont from '../../assets/images/fairmont.svg';

const TravelGroup = () => {
  return (
    <section className="travel">
      <p className="travel__tag-line">Please select the item you want to stick to the top. (Travel)</p>
      <article className="travel__partner-list">
        <PartnerCard src={ card1 } />
        <PartnerCard src={ card2 } />
        <PartnerCard src={ avis } />
      </article>
      <article className="travel__partner-list">
        <PartnerCard src={ budget } />
        <PartnerCard src={ bestwest} />
        <PartnerCard src={ fairmont } />
      </article>
    </section>
  );
};

export default TravelGroup;