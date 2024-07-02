import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons"

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className = "font-medium sm:text-xl text-center">{text}</p>
        <Link to = {link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className ="sm:text-xl sm:loading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Arapi</span> 👋
        <br/>
        A Graphic Designer who's currently learning to code. Transitioning to Software Engineer from Toronto, ON, Canada</h1>
    ),
    2: (
        <InfoBox
            text="Developed many skills and starting my career as a Software Engineer"
            link = "/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Created multiple projects in many areas of Software Engineering. Curious about the impact?"
            link = "/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Looking to hire a well-rounded Software Engineer?"
            link = "/contact"
            btnText="Let's talk"
        />
    )
}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo;
