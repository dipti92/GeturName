import React from 'react';
import './namecard.css';

const url='https://www.namecheap.com/domains/registration/results/?domain=';

const Namecard = ({suggestedname})=>{
    return(
        <a className = "clink" href={`${url}${suggestedname}`}>
        <div className="card-cont">
          <p className="result-name"> {suggestedname}</p> 
        </div>
        </a>
    )
}

export default Namecard;