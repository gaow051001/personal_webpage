import React from "react";
import { Link } from "gatsby"
// import * as icons from 'react-bootstrap-icons'
import Layout from "../components/layout/Layout";
import CarouselBox from "../components/carousel/CarouselBox"
import * as styles from '../components/layout/gridlayout.module.css'
import * as gradientStyles from '../components/gradientAnimation.module.css'
import '../components/fontCal/Calendas-Plus-Regular/Webfont/Calendas-Plus-Regular-Webfont/stylesheet.css'
// import * as hoverStyles from '../components/titleHover.module.css'
// import * as buttonStyles from '../components/buttonHover.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";
import { Container } from "react-bootstrap";

const IndexPage = () => {
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
    {/* <div style={{position: 'relative', left: "0", height: '20vh', width: '20em', clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", backgroundImage: "linear-gradient(90deg, #a1c4fd 10%, #c2e9fb 90%)", }}>
    </div> */}
    <Container style={{textAlign: 'right', fontFamily: "calendas_plusregular"}}>
      <div data-aos="fade-in" className={gradientStyles.gradientText} style={{fontWeight: "lighter", fontSize: "150%", fontStyle: 'italic'}}>Who am I?&nbsp; </div>
      <div data-aos="fade-in" data-aos-delay={100} className={gradientStyles.gradientText} style={{fontWeight: "lighter", fontSize: "200%", fontStyle: 'italic'}}>Software Engineer.</div>
      <div data-aos="fade-in" data-aos-delay={200} className={gradientStyles.gradientText} style={{fontWeight: "lighter", fontSize: "200%", fontStyle: 'italic'}}>Web-Developer.</div>
      <div data-aos="fade-in" data-aos-delay={300} className={gradientStyles.gradientText} style={{fontWeight: "lighter", fontSize: "200%", fontStyle: 'italic'}}>Designer.</div>
      <Link data-aos="fade-in" data-aos-delay={300} className={gradientStyles.gradientLink} style={{fontWeight: "lighter", fontSize: "200%", fontStyle: 'italic'}} to="/profile/" activeClassName="active">About Me &#8883;</Link>
    </Container>
    
    <div className={styles.transparencyBox}>
      <div className={styles.parent}>
        <div className={styles.div1} style={{textAlign: "center"}}> 
          <CarouselBox/>
        </div>
        {/* <div className={styles.div4} style={{display: 'flex', justifyContent: "center", alignItems: 'end'}}>
          <div style={{textAlign: 'right'}}>
            <h1 className={hoverStyles.hoverAnimate} style={{fontWeight: "lighter", fontSize: "400%", fontStyle: 'italic'}}> Welcome. &nbsp; &nbsp;</h1>
            <p style={{fontWeight: "lighter", fontSize: "200%", fontStyle: "italic"}} data-aos="fade-right">To My Webpage! <icons.Display className={buttonStyles.bounceHover}/> </p>
          </div>
        </div> */}
      </div>
    </div>
    {/* <img className={frameStyles.fancyFrame} src={workDesk} style={{height: 'auto', width: '15vw'}}/> */}
  </Layout>
  );
};
export default IndexPage;
/* <div className={quoteStyles.quoteBox}>
<p className={quoteStyles.item1}>This is your last chance. After this, there is no turning back.</p>

<p className={quoteStyles.item2}>You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.</p>

<p className={quoteStyles.item3}>You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.</p>
</div> */
/* <div style={{overflow: "hidden"}}>
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{fill: '#ffffff', width: '205%', height: '280px', transform: 'scaleX(-1)'}}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
</div> */
/* <div className={styles.div3} style={{display: 'flex', alignItems: 'end'}}>
<div>
  <button className={buttonStyles.buttonHover} >
    <icons.Github style={{height: '6.5em', width:'auto'}}/>
  </button>
  <button className={buttonStyles.buttonHover} >
    <icons.Github style={{height: '6.5em', width:'auto'}}/>
  </button>
  <button className={buttonStyles.buttonHover} >
    <icons.Github style={{height: '6.5em', width:'auto'}}/>
  </button>
  <div style={{display: 'inline-block', width: '5.5em', height: 'fit-content', transform: 'rotate(90deg)', padding: 'none', marginRight: 'none'}}>Connect With Me!</div>
</div>

<div className={gradientStyles.gradientAnimation}>
<Image fluid={true} rounded={true} src={headPic} style={{width: "30%", height:"auto"}}/>
→ #4ac29a#bdfff3
style={{textAlign: "center", alignContent: "center", background: "linear-gradient(to right, #93A5CF, #E4EfE9, #ffffff)",width: "90%", height: '70%'}}
</div>

</div> */