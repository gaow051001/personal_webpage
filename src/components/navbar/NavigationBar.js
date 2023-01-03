import { Link } from "gatsby"
import React from "react";
import logo from "../../images/sign3.png"
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from "./navbar.module.css"
import '../fontCal/Calendas-Plus-Regular/Webfont/Calendas-Plus-Regular-Webfont/stylesheet.css'

const NavigationBar = () => (
    <header style={{display: "block", paddingTop: '1em'}}>
      <div style={{backgroundColor: 'none'}}>
        <Container>
          <Navbar expand="lg" collapseOnSelect={true} type={"dark"} variant={"dark"}>
            <Link to="/"><img src={logo} alt={'Site Logo'} width="150"/></Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
              <Nav as="ul" style={{fontWeight: "lighter", fontSize: "1.5em", fontFamily: "calendas_plusregular"}}>
                <Nav.Item as='li'>
                  <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Link to="/profile/" className="nav-link" activeClassName="active">Profile</Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Link to="/project/" className="nav-link" activeClassName="active">Project</Link>
                </Nav.Item>
                {/* <Nav.Item as='li'>
                  <Link to="/test/" className="nav-link" activeClassName="active">Test</Link>
                </Nav.Item> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      {/* border: "0px solid black", padding: "1rem 0rem",  */}
      
      <hr className={styles.separatorLine}/>
    </header>
    
)
export default NavigationBar;