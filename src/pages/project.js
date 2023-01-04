import React from "react";
import Layout from "../components/layout/Layout";
import SectionBox from "../components/section/sectionbox";
// import workDesk from "../images/workDesk2.jpg"
import waiterLogo from "../images/waiter.svg"
import AIImg from "../images/AI.jpg"
import orderImg from "../images/orderImg.jpg"
import teamImg from "../images/teamImg.jpg"
import * as hoverStyle from "../components/buttonHover.module.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import '../components/fontCal/Calendas-Plus-Regular/Webfont/Calendas-Plus-Regular-Webfont/stylesheet.css'
import { Button, Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const ProjectPage = () => {
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
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Layout>
      <Container>
        {/* <h1 style={{textAlign: 'center', color: 'white', fontSize: '2em', fontFamily: "calendas_plusregular", textShadow: '2px 2px 5px black', marginBottom: '1em'}}>Projects</h1> */}
        <SectionBox>
          <MDBRow className="row-cols-1 row-cols-md-2 g-4" style={{color: 'white', fontFamily: "calendas_plusregular", textShadow: "black 1px 1px 5px"}}>
            <MDBCol>
              <MDBCard data-aos="fade-right" style={{margin: '3em 1em 3em 1em', backgroundColor: "rgba(265, 256, 256, .4"}}>
                  <MDBCardImage src={AIImg} fluid alt='...' position='top' className={hoverStyle.imageHover}/>
                  <MDBCardBody style={{fontWeight: "lighter"}}>
                    <MDBCardTitle>Artificial Intelligence Projects</MDBCardTitle>
                    <MDBCardText>
                      Introduction to Artificial Intelligence - CSCE 420: Searches, Constraint Sat, Resolutions, and Logical Inference
                    </MDBCardText>
                    <Button variant='secondary' href='https://github.com/gaow051001/CSCE_420-master'>
                      Check it out!
                    </Button>
                  </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard data-aos="fade-left" data-aos-delay="500" style={{margin: '3em 1em 3em 1em', backgroundColor: "rgba(265, 256, 256, .4)"}}>
                <MDBCardImage src={orderImg} fluid alt='...' position='top' className={hoverStyle.imageHover}/>
                <MDBCardBody style={{fontWeight: "lighter"}}>
                  <MDBCardTitle>OrderSystemAPI</MDBCardTitle>
                  <MDBCardText>
                    Simple Order Application using ReactJS and Postgres
                  </MDBCardText>
                  <Button variant='secondary' href='https://github.com/gaow051001/orderSystem-main'>
                      Check it out!
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard data-aos="fade-right" data-aos-delay="1000" style={{margin: '3em 1em 3em 1em', backgroundColor: "rgba(265, 256, 256, .4)"}}>
                <MDBCardImage src={waiterLogo} fluid alt='...' position='top' className={hoverStyle.imageHover} style={{backgroundColor: 'white'}}/>
                <MDBCardBody style={{fontWeight: "lighter"}}>
                  <MDBCardTitle>Senior Capstone Project</MDBCardTitle>
                  <MDBCardText>
                    Implemented Hard-Delete and Soft-Delete functionalities and Validation Testing for the features in Waiter - 
                    <span style={{fontWeight: 'bold'}}>Sponsored by Two Sigma</span>
                  </MDBCardText>
                  <Button variant='secondary' href='https://github.com/twosigma/waiter/tree/capstone-2022-master'>
                      Check it out!
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard data-aos="fade-left" data-aos-delay="1500" style={{margin: '3em 1em 3em 1em', backgroundColor: "rgba(265, 256, 256, .4)"}}>
                <MDBCardImage src={teamImg} fluid alt='...' position='top' className={hoverStyle.imageHover}/>
                <MDBCardBody style={{fontWeight: "lighter"}}>
                  <MDBCardTitle>PickTeam</MDBCardTitle>
                  <MDBCardText>
                    CSCE 431 Software Engineering Project -
                    PickTeam is a web application that's made to simplify the team creation process. 
                    This first iteration includes features to create accounts, make related criteria teams, and team pages.
                  </MDBCardText>
                  <Button variant='secondary' href='https://pickteam-ruby.herokuapp.com/'>
                      Check it out!
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {/* <MDBCol>
              <MDBCard data-aos="fade-right" data-aos-delay="2000" style={{margin: '1em'}}>
                <MDBCardImage src={workDesk} fluid alt='...' position='top' className={hoverStyle.imageHover}/>
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol> */}
          </MDBRow>
        </SectionBox>
      </Container>
    </Layout>
  );
};
export default ProjectPage;