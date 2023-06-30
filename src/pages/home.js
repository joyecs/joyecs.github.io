import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import joye from '../images/profile.jpeg';
import wms from '../images/wms.png';
import Image from 'react-bootstrap/Image';
//Import all icons by using the prefix:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faTruckLoading, faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { fab, faBootstrap, faPython, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReact, faHtml5, faCss3Alt, faJs, faSass, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPortrait, faPhone, faMap, faLaptopCode, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import cv_file from '../static/Joye_Zhang_Resume.pdf'
import { Link } from 'react-router-dom';

library.add(fas, fab)

function Home() {
    const element = <FontAwesomeIcon icon={faGithub} size='2x' />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size='2x' />;
    const gmail = <FontAwesomeIcon icon={faEnvelope} className="left_logo" />;
    const cv = <FontAwesomeIcon icon={faPortrait} size='2x' />;
    const phone_icon = <FontAwesomeIcon icon={faPhone} className="left_logo" />;
    const map_icon = <FontAwesomeIcon icon={faMap} className="left_logo" />;
    const truck_icon = <FontAwesomeIcon icon={faTruckLoading} />;
    const react_icon = <FontAwesomeIcon icon={faReact} />;
    // <FontAwesomeIcon icon="fa-brands fa-react" />
    return (
        <Container className='home_container'>
            {/* general intro */}
            <Row className='section'>
                <Col xs="12" md={6} lg={8}>
                    <h1>
                        Hello world, I'm Joye.
                    </h1>
                    <h2>
                        A Software Engineer.
                    </h2>
                    <p>
                        Highly motivated software developer with experience in web development and system analysis. 
                        Skilled in designing and building responsive frontend pages, and creating highly functional client-side and server-side architecture. <br /> 
                        Strong experience with JavaScript, HTML5, Bootstrap, React, MVC, Django, SQL, GitHub, and Scrum.
                        Hands on experience with data visualization and reports using Power BI and Tableau.
                    </p>
                    <Link to={'/portfolio'}>
                        <Button variant='light'>Check My Work</Button>
                    </Link>
                </Col>
                <Col xs="12" md={6} lg={4}>
                    <Image thumbnail={true} src={joye} className="recent-work-img round-img"></Image>
                </Col>
            </Row>
            {/* recent work */}
            <Row className='section'>
                <h4>Recent Work</h4>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={3}></Col>
                <Col xs="12" md={6} className='work-img-parent'>
                    <Image src={wms} alt="Business Flow" className="recent-work-img"></Image>
                    <div className='middle pd-25'>
                        <div className='into'>
                            <b>Warehouse Management System</b>
                        </div>
                        <span>A system to track the containers, products, shipment, inventory and sales. </span>
                        <br />
                        <div className='skill'>React</div>
                        <div className='skill'>HTML</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>Ajax</div>
                        <div className='skill'>Json</div>
                        <div className='skill'>Django</div>
                        <div className='skill'>Python</div>
                        <div className='skill'>DRF</div>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
            {/* skillset */}
            <Row className='section'>
                <h4>Skillset</h4>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={1}></Col>
                <Col xs="4" md={2} >
                    <div className="skill-set d-flex justify-content-center">{react_icon}</div>
                    <div className='skill-text d-flex justify-content-center'>React</div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        HTML5
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        CSS3
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        JavaScript
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faSass} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Sass
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        GitHub
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faUniversalAccess} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Accessibility
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Bootstrap
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Responsive Design
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faFirefoxBrowser} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Cross Browser
                    </div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Django
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={1}></Col>
                <Col xs="4" md={2} >
                    <div className="skill-set d-flex justify-content-center">
                    <FontAwesomeIcon icon={faMicrosoft} className='report-skills' />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>Power BI</div>
                </Col>
                <Col xs="4" md={2}>
                    <div className="skill-set d-flex justify-content-center">
                        <FontAwesomeIcon icon={faSnowflake} className='report-skills' />
                    </div>
                    <div className='skill-text d-flex justify-content-center'>
                        Tableau
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
            {/* contact info  */}
            <Row className='section justify-content-md-center'>
                <Col xs={12} md={12}>
                    <div className="info_list">
                        Connect with me on <a href="https://www.linkedin.com/in/joyezhang/" target='_blank'>LinkedIn</a>.
                    </div>
                </Col>
                {/* </Row>
            <Row> */}
                <Col xs={12} md={12} lg={12}>
                    <div className="info_list">
                        Straight shot to my inbox: &nbsp;&nbsp;
                        <a href="mailto:joyee816@gmail.com?subject=Getting_In_Touch_With_Joye_Zhang">
                            {gmail} &nbsp;&nbsp; joyee816@gmail.com
                        </a>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    {/* <div className="info_list">{phone_icon} &nbsp;&nbsp; &nbsp; (269)362-0864&nbsp;&nbsp; &nbsp;</div> */}
                </Col>
                <Col xs={12} lg={3}>
                    {/* <div className="info_list">{map_icon} &nbsp;Greater Los Angeles, CA. USA</div> */}
                </Col>
            </Row>
            {/* floating icons  */}
            <Row className="fix-icons">
                <Col>
                    <div className='icon-div'>
                        <a href="https://github.com/joyecs" target="_blank" className="font_icon">{element}</a>
                    </div>
                    <div className='icon-div'>
                        <a href="https://www.linkedin.com/in/joyezhang/" target="_blank" className="font_icon">{linkedin}</a>
                    </div>
                    {/* <a href="joyee816@gmail.com" target="_blank" className="font_icon">{gmail}</a> */}
                    <div className='icon-div'>
                        <a href={cv_file} target="_blank" className="font_icon" >{cv}</a>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <footer>
                    <p>© {new Date().getFullYear} Designed and Developed with Love By Joye Zhang</p>
                </footer>
            </Row>
        </Container>

    );
}
export default Home