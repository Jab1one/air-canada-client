import React, { useState } from 'react';
import './PartnerCard.scss';
import ink from '../../assets/images/123ink.svg'


const PartnerCard = () => {
    const [selected, setSelected] = useState(false);

    return (
       <>
       <section>
        <div  className={`partner-card ${selected ? 'selected' : ''}`}
            onMouseEnter={() => setSelected(false)}
            onClick={() => setSelected(!selected)} 
        >
             <img src={ink} alt="Partner" />
        </div>
        </section>     
       </>

    );
}

export default PartnerCard