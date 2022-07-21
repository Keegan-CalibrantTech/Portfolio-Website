import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "Full Stack Web Developer and learing React currently. Worked with Calibrant Classes for The Past one year and has Developed their website and still developing more modules. Strong professional with the will to learn more",
        highlights: {
            bullets: [
                    "Full Stack Web Devloper",
                    "Interactive Front End",
                    "React Developer",
                    "Managing Databases",
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlight = () =>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                        <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Chose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            > Hire Me </button>
                            <a href='#' download="#">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
