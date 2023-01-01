import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../footer/Footer";
import * as styles from "../layout/layout.module.css";
import bgImage from "../../images/workDesk3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Layout = ({ children }) => {
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
      offset: 0, // offset (in px) from the original trigger point
      delay: 500, // values from 0 to 3000, with step 50ms
      duration: 3000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });
  }, []);
  return (
    <div  className={styles.layout} style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",               
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed", 
    // outline: "1.5px solid white",
    // outlineOffset: "-.5em" 
    }}>
        <NavigationBar/>
      <main data-aos='fade'>{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;