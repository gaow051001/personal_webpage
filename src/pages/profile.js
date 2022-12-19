import React from "react";
import Layout from "../components/layout/Layout";
import { Row, Col, Container, Button } from "react-bootstrap";
import fullPic from "../images/fullPic.jpg"
import * as frameStyle from "../components/fancyFrame.module.css"
import * as layoutStyle from "../components/layout/gridlayout.module.css"
import * as icons from 'react-bootstrap-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const ProfilePage = () => (
    <Layout>
        <Container>
            <Row>
                <Col>
                    <img src={fullPic} className={frameStyle.fancyFrame} style={{maxWidth: "inherit"}}/>
                    <div data-aos="fade-down" data-aos-delay="1000" style={{display:"inline-block", color: "white", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap", fontWeight: "lighter", textShadow: "black 1px 1px"}}>
                        Connect with Me
                    </div>
                    <div style={{display:"inline-block", color: "white", textAlign: "center", width: "inherit", whiteSpace: "pre-wrap"}}>
                        <Button data-aos="fade-down" data-aos-delay="1250" variant="dark" size="lg" style={{margin: "5px"}} href='https://github.com/gaow051001'>
                            <icons.Github style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                        </Button>
                        <Button data-aos="fade-down" data-aos-delay="1500" variant="dark" size="lg" style={{margin: "5px"}}>
                            <icons.Facebook style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                        </Button>
                        <Button data-aos="fade-down" data-aos-delay="1750" variant="dark" size="lg" style={{margin: "5px"}} href='https://www.instagram.com/fiji_gao/?next=%2F'>
                            <icons.Instagram style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                        </Button>
                        <Button data-aos="fade-down" data-aos-delay="2000" variant="dark" size="lg" style={{margin: "5px"}} href='https://www.linkedin.com/in/wei-jie-gao-01aa29187/'>
                            <icons.Linkedin style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                        </Button>
                    </div>
                </Col>
                <Col className={layoutStyle.transparencyTextBox} style={{textAlign: 'center', color: 'white', fontWeight: "lighter", textShadow: "black 1px 1px"}}>
                    {/* <h1>
                        "Curiosity"
                    </h1> */}
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
                    <Button data-aos="fade-down" data-aos-delay="1250" variant="outline-primary">
                        <icons.EnvelopeAtFill style={{margin: 'none', padding: 'none', fontSize: '1.5em'}}/>
                    </Button>
                    <p data-aos="fade-down" data-aos-delay="1500" style={{fontSize: '150%'}}>
                     &mdash; Resume &mdash;
                    </p>
                    <Button data-aos="fade-down" data-aos-delay="1750" variant="outline-primary">
                        Download PDF Version
                    </Button>
                    
                </Col>
            </Row>    
        </Container>
    </Layout>
);
export default ProfilePage;