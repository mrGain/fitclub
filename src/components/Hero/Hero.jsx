import React from "react";
import Header from "../Header/Header";
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

                {/* the beat add  */}
                <div className="the-best-add">
                    <div></div>
                    <span>The best fitnes club in the town</span>
                </div>

                {/* Hero heading goes here  */}
                <div className="hero-text">
                    <div>
                        <span>Shape</span><span>Your</span>
                    </div>
                </div>
            </div>
            <div className="right-h">right side</div>
        </div>
    )
}


export default Hero;