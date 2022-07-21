import React,{useState, useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    const[selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const[carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) =>{
        return(
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                        <span>{props.heading ? props.heading : ''}</span>
                        {props.fromDate && props.toDate ? (
                            <div className="heading-date">
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ): (
                            <div></div>
                        )}
                </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : " "}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : " "}</span>
                    </div>
            </div>
        );
        
    };

    const resumeBullets =[
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: "HTML", ratingPercentage: 90},
        {skill: "CSS", ratingPercentage: 90},
        {skill: "PHP", ratingPercentage: 90},
        {skill: "JavaScript", ratingPercentage: 75},
        {skill: "React JS", ratingPercentage: 45},
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "A Personal Portfolio website to showcase all my Details and Projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
        {
            title: "Calibrant Classes",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "Website having all classes details with a dashboard for the students of Calibrant Classes",
            subHeading: "Technologies Used: HTML, PHP, CSS, JavaScript, MySQL",
        },
        {
            title: "Travel Destination",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "Website having all travel details of places in India, including detailed information about the Location",
            subHeading: "Technologies Used: HTML, PHP, CSS, JavaScript, MySQL",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading 
            heading={"St. Francis Institute of Technology"}
            subHeading={"BACHELOR OF ENGINEERING IN COMPUTER SCIENCE"}
            fromDate={"2018"}
            toDate={"2021"}
            />
            <ResumeHeading 
            heading={"Holy Family Junior College"}
            subHeading={"HSC in Science"}
            fromDate={"2016"}
            toDate={"2018"}
            />
            <ResumeHeading 
            heading={"St. Dominic Savio High School"}
            subHeading={"Seconday School"}
            fromDate={"2016"}
            toDate={"2006"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading 
                heading={"Calibrant Classes"}
                subHeading={"Full Stack Developer"}
                fromDate={"2020"}
                toDate={"present"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as a Full Stack Developer at Calibrant Classes
                    </span>
                </div>

                <div className="experience-description">
                    <span className='resume-description-text'>
                        - Developed a website for client with a student dashboard, payment, etc.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Integration of RazorPay for making payments regarding to fees and courses.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Created Sleek and Classic UI as per the given designs.
                    </span>
                </div>
            </div>
        </div>,
            
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) =>(
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage-bar'> 
                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key = {index}
                    heading = {projectDetails.title}
                    subHeading = {projectDetails.subHeading}
                    description = {projectDetails.description}
                    fromDate = {projectDetails.fromDate}
                    toDate = {projectDetails.toDate}
                />
            ))}
        </div>,

        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading = 'Riding A Bike'
                description = 'Apart from a Developer, I love going on long bike trips exploring unexplored places'
            />
            <ResumeHeading
                heading = 'Music'
                description = 'Listening to Old Music is something I do when I take breaks from work'
            />
            <ResumeHeading
                heading = 'Competitive Sports'
                description = 'I like to challenge myself by playing Basketball, push my limits to become a better person in the game of Basketball'
            />
        </div>,
        
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };

      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

      const getResumeScreen = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

      useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);

  

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className="resume-card">
                    <div className='resume-bullets'></div>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>            
        </div>
    );
}

