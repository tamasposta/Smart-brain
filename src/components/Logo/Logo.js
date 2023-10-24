import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2">
                <div className="Tilt-inner pa3" style={{padding:'10px', height: '150px'}}>
                    <img src={brain} alt='logo'></img>
                </div>
            </Tilt>
        </div>
        );    
}

export default Logo;