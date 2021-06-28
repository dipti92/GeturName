import React from 'react';
import './Header.css';
import img from '../5.png'

const Header = ({headExpand}) => {
    return(
        <div className="head_cont">
             
            <img src={img}
            className={`img-head ${
                headExpand
                ? 'img-head-expanded'
                :'img-head-contracted'
            }`}></img>
            
            <h1 className={`head-txt ${
                headExpand
                ? 'head-txt-expanded'
                :'head-txt-contracted'
            }`}>
                Get Your App NAME !
               
            </h1>

          
        </div>
    );
};

export default Header;