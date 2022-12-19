import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../footer/Footer";
import * as styles from "../layout/layout.module.css";
import bgImage from "../../images/workDesk.jpg";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavigationBar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;