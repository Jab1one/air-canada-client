import PartnerCard from './PartnerCard/PartnerCard';
import './TravelGroup.scss';
import ink from '../../assets/images/123ink.svg';
import aliexpress from '../../assets/images/aliexpress.svg';
import allsaints from '../../assets/images/allsaints.svg';
import attitude from '../../assets/images/attitude.svg';
import aerie from '../../assets/images/aerie.svg';
import adidas from '../../assets/images/adidas.svg';

const TravelGroup = () => {
  return (
    <section className="travel">
      <article className="travel__partner-list">
        <PartnerCard src={ card1 } />
        <PartnerCard src={ allsaints } />
        <PartnerCard src={ avis } />
      </article>
      <article className="travel__partner-list">
        <PartnerCard src={ attitude } />
        <PartnerCard src={ aerie} />
        <PartnerCard src={ adidas } />
      </article>
    </section>
  );
};

export default EverydayGroup;