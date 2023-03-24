import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Container, Row, Col } from 'react-bootstrap'
function Experience() {
    return (
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
                            <span className="badge badge-pill badge-success">SDE</span>&nbsp; Software Engineer</h5>
                        <strong>Pikicode Corp.</strong> &nbsp;&nbsp;
                        City of Industry, CA <br /> 2022.10 - Now
                        Responsibilites:
                        <ul>
                            <li>
                                Migrate CMS system from JavaScript and jQuery to React, develop new code and conduct unit test and system test.
                            </li>
                            <li>
                                Develop Django templates, views and models using Django template tags, context processors, filters and RestAPI.
                            </li>
                            <li>
                                Lead peer reviews front-end and back-end Python code and provide feedback to ensure optimum code quality.
                            </li>

                        </ul>
                        <h5> <span className="badge badge-pill badge-success">Coder</span> Front End Engineer</h5>
                        <strong>Pikicode Corp.</strong> &nbsp;&nbsp;
                        City of Industry, CA <br /> 2020.2 - 2021.2
                        Responsibilites:
                        <ul>
                            <li>
                                Debugged and conducted unit testing and cross-browser testing throughout the entire development process including design,
                                development, and deployment.
                                Migrate CMS system from JavaScript and jQuery to React, develop new code and conduct unit test and system test.
                            </li>
                            <li>
                                Created and maintained modular, responsive templates and interfaces that enhance the user experience, by using HTML5,
                                CSS, React and JavaScript libraries such as Lazy load, Magnific Popup.
                            </li>
                            <li>
                                Built reusable and efficient JS libraries including forms validation, carousels, and micro-animations.
                            </li>

                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md='1' lg='1' className="left_bar">
                    <div className="circle"></div>
                    <ProgressBar className="vertical_bar hb1">
                    </ProgressBar>
                </Col>
                <Col md='11' lg='11'>
                    <div className='andrews right_info'>
                        <h5 className="ani_title">
                            <span className="badge badge-pill badge-success">Full Stack</span>
                            &nbsp;Full Stack Software Developer </h5>
                        <strong>Naked Zebra</strong> &nbsp;&nbsp;
                        Los Angeles, CA <br /> 2022.2 - 2022.8
                        Responsibilites:
                        <ul>
                            <li>
                                Designed visually appealing client-side and server-side architecture with JavaScript, VBScript, and Classic ASP and manage
                                MSSQL database on AWS.
                            </li>
                            <li>
                                Led sales team to hold campaign and optimize SEO on Shopify and strategized direction on emerging technology.

                            </li>
                            <li>
                                Wrote API to synchronize product and inventory information on third-party platforms and wrote technical documentation.

                            </li>
                            <li>
                                Translated business flows into feasible solutions and ensure system security, maintainability, usability, and reliability.

                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md='1' lg='1' className="left_bar">
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
                        Berrien Springs, MI <br /> 2019.5 - 2019.12
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
                <Col md='1' lg='1' className="left_bar">
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
                        Guangzhou, CN <br /> 2018.5 - 2018.8
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
                <Col md='1' lg='1' className="left_bar">
                    <div className="circle"></div>
                    <ProgressBar className="vertical_bar hb1">
                    </ProgressBar>
                </Col>
                <Col md='11' lg='11'>
                    <div className='angel right_info'>
                        <h5 className="ani_title">
                            <span className="badge badge-pill badge-success">CSS </span>
                            &nbsp;Database Assistant </h5>
                        <strong>Angel Education LLC.</strong>&nbsp;&nbsp;
                        Guangzhou, CN <br />  2019.5 - 2019.12
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