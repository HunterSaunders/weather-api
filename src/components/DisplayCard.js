import '../styles/DisplayCard.scss';

import CloudSun from '../images/cloud_sun.png';
import backArrow from '../images/back_arrow.png';

import { useRef, useState } from 'react';


const DisplayCard = () => {
    
    const [flip, setFlip] = useState(false);
    const [hover, setHover] = useState(false);

    const frontCard = useRef();
    const backCard = useRef();

    const dotStyle = hover ? {backgroundColor: "#000"}:{};
    
    return (
        <div className = {flip ? 'displayCard-Container displayCard-flip' : 'displayCard-Container'}>
            
            <div className="displayCard-front" ref={frontCard}>
                <div className= 'displayCard-header'>
                    <h1>Seattle</h1>
                    <span className="menu" onMouseEnter ={() => setHover(true)} onMouseLeave ={() => setHover(!hover)} onClick={()=> setFlip(!flip)}>
                        <div className="dot" style={dotStyle}/>
                        <div className="dot" style={dotStyle}/>
                        <div className="dot" style={dotStyle}/>
                    </span>
                </div>

                <div className="displayCard-date">
                    <h4>Mon, 1:00PM, Mostly Sunny</h4>
                    <div className="date-line" />
                </div>

                <div className="displayCard-weather">
                    <div className="displayCard-temp">
                        <h1>75</h1>
                        <h2>°F</h2>
                    </div>
                    <img src={CloudSun} alt="Weather Icon" />
                </div>
                <div className="displayCard-info">
                    <div>
                        <h4 className="text-faded">MIN</h4>
                        <h3>68</h3>
                    </div>
                    <div>
                        <h4 className="text-faded">MAX</h4>
                        <h3>81</h3>
                    </div>
                </div>
            </div>



            <div className="displayCard-back" ref={backCard}>
                <img src={backArrow} alt="Back Arrow" onClick={()=> setFlip(!flip)}/>
                <ul className="displayCard-infoAdditional">
                    <li>
                        <h4 className="text-faded">PRECIPITATION</h4>
                        <h3>20%</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">VISIBILITY</h4>
                        <h3>10 MILES</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">HUMIDITY</h4>
                        <h3>16%</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">SUNRISE</h4>
                        <h3>5:59 am</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">SUNSET</h4>
                        <h3>8:47 pm</h3>
                    </li>
                </ul>
                <button className="delete-card">Delete</button>
                
            </div>
            
        </div>
    )
}

export default DisplayCard
