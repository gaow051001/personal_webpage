import React from "react";
import Layout from "../components/layout/Layout";
import { Row, Col, Container, Button } from "react-bootstrap";
import fullPic from "../images/fullPic.jpg"
import pandaIcon from "../images/pandaIcon.png"
import resumePDF from "../assets/Resume_12_21_2022.pdf"
import * as frameStyle from "../components/fancyFrame.module.css"
import * as layoutStyle from "../components/layout/gridlayout.module.css"
import * as navbarStyle from "../components/navbar/navbar.module.css"
import * as buttonStyles from '../components/buttonHover.module.css'
import * as icons from 'react-bootstrap-icons'
import '../components/fontCal/Calendas-Plus-Regular/Webfont/Calendas-Plus-Regular-Webfont/stylesheet.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ProfilePage = () => {
    useEffect(() => {
        AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 50, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);
    return (
    <Layout data-aos="fade-in">
        <Container className={layoutStyle.scrim} 
            style={{
            display: 'block',
            textAlign: 'center',
            paddingTop: '20vh',
            minHeight: "92vh"}}>
            {/* <img src={pandaIcon} style={{maxWidth: "25vh", borderRadius: '50% 0% 50% 0%', boxShadow: '2em 2em 1em black'}}/> */}
            <h1 style={{color: 'white', fontSize: '7em', fontFamily: "calendas_plusregular", letterSpacing: '.1em', textShadow: '2px 2px 10px black'}}>
                Me?
                {/* Who am I? */}
            </h1>
            <p style={{color: 'white', fontSize: '2em', fontFamily: "calendas_plusregular", textShadow: '2px 2px 5px black'}}>
                Let's explore together.
                {/* Let's do it together. */}
            </p>
            <a href="#profile" style={{    
                bottom: '4em',
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right:'0',
                textAlign: 'center'
                }}>
                <div className={buttonStyles.arrow}></div>
                {/* <icons.CaretDownFill className={buttonStyles.buttonHover} size={'3em'}/> */}
            </a>
        </Container>
        <hr className={navbarStyle.separatorLine}/>
        <div id="profile" className={layoutStyle.whiteBox}>
            <Container>
                <Row>
                    <Col style={{textAlign: 'center', color: 'white', fontWeight: "lighter", textShadow: "black 1px 1px", margin: 'auto'}}>
                        <img src={fullPic} className={frameStyle.outlineFrame} style={{maxWidth: "100%", margin: "auto"}}/>
                    </Col>
                    <Col style={{textAlign: 'left', fontWeight: "lighter", margin: 'auto', paddingRight: '2vw', paddingLeft: '2vw', fontFamily: "calendas_plusregular"}}>
                        <h1>Profile.</h1>
                        <br/>
                        <br/>
                        <p style={{textAlign: 'left', fontSize: 'large'}}>
                            Hi there! My name is Wei-Jie Gao. I'm a software engineer with preferences in Full-Stack. 
                            I'm also currently in my Senior year of B.S. Computer Science at Texas A&M University, 
                            minoring in Business and Mathematics. I have gained a multitude of interests, including the likes of designing, 
                            constructing, and enhancing projects. If anything piques my interest, I'm more than willing to learn and adapt 
                            to the new environment.
                        </p>
                        <p style={{textAlign: 'left', fontSize: 'large'}}>
                            I'm open to any Software Engineer/Developer role and other engineering opportunities. 
                            If you would like to talk more in-depth, the main way to contact me is through my email:&nbsp;
                            <a href="mailto:gaow051001@gmail.com">gaow051001@gmail.com</a>. 
                            I look forward to our dicussion!
                        </p>
                        <br/>
                        <a href={resumePDF} className={buttonStyles.buttonOutline}> 
                            Download Resume &nbsp;<icons.Download/>
                        </a>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        <hr/>
                        <h3 style={{display:"inline-block", textAlign: "center", width: "inherit", padding: "5px", fontFamily: "calendas_plusregular"}}>
                            Let's Connect!
                        </h3>
                        <div style={{display:"inline-block", color: "white", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap"}}>
                            <Button variant="dark" size="lg" style={{margin: "5px"}} href='https://github.com/gaow051001'>
                                <icons.Github style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                            </Button>
                            <Button variant="dark" size="lg" style={{margin: "5px"}} href='https://www.facebook.com/weijie.gao.58'>
                                <icons.Facebook style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                            </Button>
                            <Button variant="dark" size="lg" style={{margin: "5px"}} href='https://www.instagram.com/fiji_gao/?next=%2F'>
                                <icons.Instagram style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                            </Button>
                            <Button variant="dark" size="lg" style={{margin: "5px"}} href='https://www.linkedin.com/in/wei-jie-gao-01aa29187/'>
                                <icons.Linkedin style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                            </Button>
                            
                        </div>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={layoutStyle.lightGreyBox}> 
            <Container style={{fontFamily: "calendas_plusregular"}}>
                <h1 style={{textAlign: "center", margin:"auto"}}>Experience.</h1>
                <br/>
                <br/>
                <br/>
                <div style={{}}>
                    {/* borderLeft: "3px double white" */}
                    <Row style={{textAlign: "left", margin:"auto"}}>
                        <Col>
                            <div style={{paddingLeft: '2em'}}>
                                <h2 style={{fontSize: '1.5em'}}>Texas A&M Senior Capstone</h2>
                                <p>
                                    Developer & Validation Tester | College Station, TX | September 2022 - December 2022
                                </p>
                                <ul>
                                    <li>
                                        Contributed on Hard/Soft Delete feature for Waiter open-source project (Two Sigma) that 
                                        simplifies the method to remove an instance and reduces the overhead of the process

                                    </li>
                                    <li>
                                        Directed the implementation of validation testing and ensured industry level code-quality
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row> 
                    <Row style={{textAlign: "left", margin:"auto"}}>
                        <Col>
                            <div style={{paddingLeft: '2em'}}>
                                <h2 style={{fontSize: '1.5em'}}>USAA LifeCo</h2>
                                <p>
                                    Software Engineer Intern | San Antonio, TX |June 2022 - August 2022
                                </p>
                                <ul>
                                    <li>
                                        Collaborated on a server-driven UI that presents various states of modern health flow for 
                                        a diverse group of users with different health complications
                                    </li>
                                    <li>
                                        Implemented Unit and Integration Tests to monitor the server-to-UI interactions and 
                                        maintain compliance with internal and external regulations
                                    </li>
                                    <li>
                                        Participated with the team in Agile Development and presented a comprehensive
                                        presentation to the LifeCo Department
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row> 
                    <Row style={{textAlign: "left", margin:"auto"}}>
                        <Col>
                            <div style={{paddingLeft: '2em'}}>
                                <h2 style={{fontSize: '1.5em'}}>Texas A&M University - College of Engineering</h2>
                                <p>
                                    Student Technician | College Station, TX |September 2021 - May 2022
                                </p>
                                <ul>
                                    <li>
                                    Delivered technical support to the ETID department by resolving software/hardware 
                                    problems and broadening the client's IT knowledge
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{textAlign: "left", margin:"auto"}}>
                        <Col>
                            <div style={{paddingLeft: '2em'}}>
                                <h2 style={{fontSize: '1.5em'}}>Texas A&M Halliburton Engineering Global Program</h2>
                                <p>
                                    Back-End Developer & QA Tester | Thessaloniki, Greece | December 2021 - January 2022
                                </p>
                                <ul>
                                    <li>
                                        Collaborated with a team to develop a team-matching application based on the SaaS
                                        concept and provide the user with a free and accessible tool to organize participants
                                    </li>
                                    <li>
                                        Implemented Unit and Integration Tests in a Test-Driven Development process that
                                        resulted in 97% code coverage of the implementation
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>   
                </div>
            </Container>
        </div>
        <hr className={navbarStyle.separatorLine}/>
        {/* <Container>
        <h1 style={{color: "#F7D08A"}}>Life Experience.</h1>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container> */}
    </Layout>
    );
};
export default ProfilePage;

{/* , display: "flex", flexWrap: "wrap"  <img src={fullPic} className={frameStyle.fancyFrame} style={{maxWidth: "40em", minWidth: '10em', margin: "auto"}}/>
            <div className={layoutStyle.transparencyTextBox} style={{textAlign: 'center', color: 'white', fontWeight: "lighter", textShadow: "black 1px 1px"}}>
                <div data-aos="fade-down" data-aos-delay="250" style={{display:"inline-block", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap", fontSize: '200%'}}>
                    Nice to meet you!
                </div>
                <p data-aos="fade-down" data-aos-delay="500" style={{fontSize: '110%'}}>
                    "Curiosity killed the cat, but satisfaction brought it back." 
                    <br/>
                    ...
                </p>
                <p data-aos="fade-down" data-aos-delay="750" style={{textAlign: 'justify'}}>
                    Hi! My name is Wei-Jie Gao. I'm a software engineer with preferences in Full-Stack. 
                    I'm also currently in my Senior year of B.S. Computer Science at Texas A&M University, 
                    minoring in Business and Mathematics. I have gained a multitude of interests, including the likes of designing, 
                    constructing, and enhancing projects. If anything piques my interest, I'm more than willing to learn and adapt 
                    to the new environment.
                </p>
                <p data-aos="fade-down" data-aos-delay="1000" style={{fontSize: '150%'}}>
                    &mdash; Email &mdash;
                </p>
                <Button href="mailto:gaow051001@gmail.com" data-aos="fade-down" data-aos-delay="1250" variant="outline-primary">
                    <icons.EnvelopeAtFill style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                </Button>
                <p data-aos="fade-down" data-aos-delay="1500" style={{fontSize: '150%'}}>
                    &mdash; Resume &mdash;
                </p>
                <Button href={resumePDF} data-aos="fade-down" data-aos-delay="1750" variant="outline-primary">
                    Download PDF Version
                </Button>
                <div data-aos="fade-down" data-aos-delay="1000" style={{display:"inline-block", color: "white", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap", fontWeight: "lighter", textShadow: "black 1px 1px", padding: "5px"}}>
                    Connect with Me
                </div>
                <div style={{display:"inline-block", color: "white", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap"}}>
                    <Button data-aos="fade-down" data-aos-delay="1250" variant="dark" size="lg" style={{margin: "5px"}} href='https://github.com/gaow051001'>
                        <icons.Github style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                    </Button>
                    <Button data-aos="fade-down" data-aos-delay="1500" variant="dark" size="lg" style={{margin: "5px"}} href='https://www.facebook.com/weijie.gao.58'>
                        <icons.Facebook style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                    </Button>
                    <Button data-aos="fade-down" data-aos-delay="1750" variant="dark" size="lg" style={{margin: "5px"}} href='https://www.instagram.com/fiji_gao/?next=%2F'>
                        <icons.Instagram style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                    </Button>
                    <Button data-aos="fade-down" data-aos-delay="2000" variant="dark" size="lg" style={{margin: "5px"}} href='https://www.linkedin.com/in/wei-jie-gao-01aa29187/'>
                        <icons.Linkedin style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                    </Button>
                </div>
            </div> */}