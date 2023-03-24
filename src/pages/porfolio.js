import React from 'react';
import Pcard from '../components/card_portf';
import Data from '../static/data';
import Project from '../components/project';

import { faMagnet } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';


function Portfolio() {
    const pros = Data.projects.map(
        (singlepro, index) =>
            <Pcard pro={singlepro} key={index}></Pcard>
        // <Pcard name={pro.name} intro={pro.intro} link_url={pro.link} duties={pro.pro_list} pic_url={pro.pic_url} pro_link={pro.url} key_str={pro.tags}></Pcard>
    );
    return (
        <Container>
            <Row className="justify-content-md-center section">
                <Col xs={12} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }} className="pb-10px">
                    <h4>Projects</h4>
                </Col>
            </Row>
            {Data.projects.map((project, idx) => (
                // <Col key={idx} xs="12" md={{span:3, offset:1}} className='work-img-parent'>
                <Project
                    rowclass={"project-row"}
                    parent_class={"work-img-parent"}
                    src={project.detail_pic}
                    class={"portfolio-img recent-work-img"}
                    name={project.name}
                    intro={project.intro}
                    duty={project.pro_list}
                    skills={project.tags}
                    pro_list={project.pro_list}
                    livelink={project.url}
                    key={idx}
                    link={project.link}
                />
                // </Col>
            ))}

            <Row className='justify-content-md-center'>
                <Col xs={12} md={{ span: 4, offset: 3 }} className="pb-10px">
                    <strong>To be continued...</strong>
                </Col>
            </Row>
        </Container>
    );
}
export default Portfolio;