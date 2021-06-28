import React from 'react';
import './ResultContainer.css'
import Namecard from './namecard';

const ResultContainer = ({suggested})=>{
    const sname = suggested.map((names)=>{
        return <Namecard key={names} suggestedname={names}/>
    });
    
    
    return(
        <div className="result-cont">
            {sname}
        </div>
    )
}

export default ResultContainer;