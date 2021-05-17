import '../styles/DisplayCard.scss';

import CloudSun from '../images/cloud_sun.png';
import backArrow from '../images/back_arrow.png';

import { useRef, useState } from 'react';

const sunTime = (unix)=>{
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2)
    return formattedTime;
};

const DisplayCard = (props) => {
    
    const [flip, setFlip] = useState(false);
    const [hover, setHover] = useState(false);

    const frontCard = useRef();
    const backCard = useRef();

    const dotStyle = hover ? {backgroundColor: "#000"}:{};

    const cityData = props.city;

    
    return (
        
        <div className = {flip ? 'displayCard-Container displayCard-flip' : 'displayCard-Container'}>
            
            <div className="displayCard-front" ref={frontCard}>
                <div className= 'displayCard-header'>
                    <h1>{cityData.name}</h1>
                    <span className="menu" onMouseEnter ={() => setHover(true)} onMouseLeave ={() => setHover(!hover)} onClick={()=> setFlip(!flip)}>
                        <div className="dot" style={dotStyle}/>
                        <div className="dot" style={dotStyle}/>
                        <div className="dot" style={dotStyle}/>
                    </span>
                </div>

                <div className="displayCard-date">
                    <h4>Mon, 1:00PM, Cloudy</h4>
                    <div className="date-line" />
                </div>

                <div className="displayCard-weather">
                    <div className="displayCard-temp">
                        <h1>{Math.round(cityData.main.temp)}</h1>
                        <h2>°F</h2>
                    </div>
                    <img src={CloudSun} alt="Weather Icon" />
                </div>
                <div className="displayCard-info">
                    <div>
                        <h4 className="text-faded">MIN</h4>
                        <h3>{Math.round(cityData.main.temp_min)}</h3>
                    </div>
                    <div>
                        <h4 className="text-faded">MAX</h4>
                        <h3>{Math.round(cityData.main.temp_max)}</h3>
                    </div>
                </div>
            </div>



            <div className="displayCard-back" ref={backCard}>
                <img src={backArrow} alt="Back Arrow" onClick={()=> setFlip(!flip)}/>
                <ul className="displayCard-infoAdditional">
                    <li>
                        <h4 className="text-faded">FEELS LIKE</h4>
                        <h3>{Math.round(cityData.main.feels_like)}°F</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">VISIBILITY</h4>
                        <h3>10 MILES</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">HUMIDITY</h4>
                        <h3>{cityData.main.humidity}%</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">SUNRISE</h4>
                        <h3>{sunTime(cityData.sys.sunrise)} am</h3>
                    </li>
                    <li>
                        <h4 className="text-faded">SUNSET</h4>
                        <h3>{sunTime(cityData.sys.sunset)} pm</h3>
                    </li>
                </ul>
                <button className="delete-card">Delete</button>
                
            </div>
            
        </div>
    )
}

export default DisplayCard
