import React from 'react';
import './SearchBox.css';

const SearchBox =({onInput}) =>{
    return(
        <div className="S_cont">
            <input placeholder="Type Keywords" 
            onChange={(event)=>onInput(event.target.value)}/>
        </div>
    )
}

export default SearchBox;