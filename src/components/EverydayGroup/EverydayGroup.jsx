import PartnerCard from '../PartnerCard/PartnerCard';
import './EverydayGroup.scss';
import ink from '../../assets/images/123ink.svg';
import aliexpress from '../../assets/images/aliexpress.svg';
import allsaints from '../../assets/images/allsaints.svg';
import attitude from '../../assets/images/attitude.svg';
import aerie from '../../assets/images/aerie.svg';
import adidas from '../../assets/images/adidas.svg';

const EverydayGroup = () => {
  return (
    <section className="everyday">
       <p className="everyday__tag-line">Please select the item you want to stick to the top. (Travel)</p>
      <article className="everyday__partner-list">
        <PartnerCard src={ ink } />
        <PartnerCard src={ allsaints } />
        <PartnerCard src={ aliexpress } />
      </article>
      <article className="everyday__partner-list">
        <PartnerCard src={ attitude } />
        <PartnerCard src={ aerie} />
        <PartnerCard src={ adidas } />
      </article>
    </section>
  );
};

export default EverydayGroup;