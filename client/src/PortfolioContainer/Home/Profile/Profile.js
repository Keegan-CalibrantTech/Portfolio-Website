import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile(){
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Keegan</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        1000,
                                        "Full Stack Dev",
                                        1000,
                                        "React/Reat Native Dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Rider by Day and Full Stack Developer by Night.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href='#' download="#">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div> 
        </div>
    )
}