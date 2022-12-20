import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../footer/Footer";
import * as styles from "../layout/layout.module.css";
import bgImage from "../../images/workDesk3.jpg";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout} style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",               
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", 
    outline: "1.5px solid white",
    outlineOffset: "-.5em" }}>
      <NavigationBar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;