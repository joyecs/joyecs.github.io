import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Container, Row, Col } from 'react-bootstrap'
function Experience(){
    return(
        <Container>
            <Row>
                <Col md='1' lg='1' className="left_bar">
                <div className="circle active"></div>
                    <ProgressBar className="vertical_bar hb1"> 
                    </ProgressBar>
                </Col>
                <Col md='11' lg='11'>
                <div className='piki right_info'>
                    <h5 className="ani_title">
                    <i className="fas fa-address-card"></i> 
                    <span className="badge badge-pill badge-success">SDE</span>&nbsp; Frontend Developer</h5>
                    <strong>Pikicode Corp.</strong> &nbsp;&nbsp;
                    LA, CA <br></br>
                    Responsibilites:
                    <ul>
                        <li>Design dynamic and browser compatible pages using HTML5, CSS3, Bootstrap, jQuery, JavaScript, Ajax,
                            Json and React.</li>

                        <li> Process front and back-end data interactions using Python and Django. </li>
                        <li> Test and debug cross-platform and cross-device compatibility of
                            applications and maintain large-scale web applications.</li>
                        <li> Work with teammates to update and control application version using Git.
                        </li>
                    </ul>
                    </div>    
                </Col>
            </Row>
            <Row>
                <Col md='1' lg='1'  className="left_bar">
                <div className="circle"></div>
                    <ProgressBar className="vertical_bar hb1"> 
                    </ProgressBar>
                </Col>
                <Col md='11' lg='11'>
                <div className='andrews right_info'>
                <h5 className="ani_title">
                    <span className="badge badge-pill badge-success">SQL</span>
                    &nbsp;SQL Database Assistant</h5>
                <strong>Andrews University</strong> &nbsp;&nbsp;
                Berrien Springs, MI <br></br>
                Responsibilites:
                <ul>
                    <li>Retrieved data about prospective students from database using SQL and
                        generated weekly reports for 6 departments.</li>

                    <li> Process front and back-end data interactions using Python and Django. </li>
                    <li> Monitored and optimized performance of database, and analyzed
                        reported issues thoroughly and provided optimal solution.</li>
                    <li> Supported internal staff members to use the system and resolved database related issues.
                    </li>
                </ul>
                </div>
                </Col>
            </Row>
                <Row>
                <Col md='1' lg='1'  className="left_bar">
                <div className="circle"></div>
                    <ProgressBar className="vertical_bar hb1"> 
                    </ProgressBar>
                </Col>
                    <Col md='11' lg='11'>
                    <div className='maihai right_info'>
                    <h5 className="ani_title">
                    <span className="badge badge-pill badge-success">JS </span>
                    &nbsp;Website Assistant </h5>
                <strong>Mai Hai Technology Corp.</strong>&nbsp;&nbsp;
                Guangzhou, CN <br></br>
                Responsibilites:
                <ul>
                    <li>Gathered, defined and translated client requirements into product stories and actionable tasks using
                        Visio.</li>
                    <li> Redesigned websites to enhance user experiences using HTML, CSS, jQuery and JavaScript. </li>
                    <li> Processed requests and invoices for customers in New Zealand.
                    </li>
                </ul>
                </div>
                    </Col>
                </Row>

                <Row>
                <Col md='1' lg='1'  className="left_bar">
                <div className="circle"></div>
                    <ProgressBar className="vertical_bar hb1"> 
                    </ProgressBar>
                </Col>
                    <Col  md='11' lg='11'>
                    <div className='angel right_info'>
                    <h5 className="ani_title">
                    <span className="badge badge-pill badge-success">CSS </span>
                    &nbsp;Database Assistant </h5>
                <strong>Angel Education LLC.</strong>&nbsp;&nbsp;
                Guangzhou, CN <br></br>
                Responsibilites:
                <ul>
                    <li>Used HTML, CSS, JQuery skills to assist with upgrading company website and improving customer experiences.</li>
                    <li> Analyzed efficiency of different marketing channels with data from customer database.
                    </li>
                    <li>Maintained customers relationship and answered phones and emails from prospective and existed customers.</li>
                </ul>
                </div>
                    </Col>
                </Row>
                
        </Container>
    );
}
export default Experience;