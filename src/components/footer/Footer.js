import React from "react";
import * as styles from "../footer/footer.module.css";
import '../fontCal/Calendas-Plus-Regular/Webfont/Calendas-Plus-Regular-Webfont/stylesheet.css'

const Footer = () => {
  return <footer className={styles.footer}>
    <div style={{textAlign: 'center', fontFamily: "calendas_plusregular"}}>
      <p>
        @ Wei-Jie Gao 2022
      </p>
    </div>
    
  </footer>;
};
export default Footer;