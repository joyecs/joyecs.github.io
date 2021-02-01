import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Data from '../static/data'


function Duty(props){
    const url_name = window.location.href;
    let proj_ = Data.projects[0];
    Data.projects.map(
        project => {
            if(url_name.indexOf(project.link)>-1){
                proj_ = project;
                console.log("Found:"+proj_);
                // return proj_;
            }
        }
    );
    let list_intro = proj_.detail_codes_intro.map(
        (code_list, index) => 
        <li key={index}>{code_list}</li>
    );
    let keyword_list = proj_.keywords.map(
        (ky, index) =>
        <span className="keyword_list" key={index} >{ky}</span>
    );
    let git = "";
    if(proj_.github_url){
        git = <a href={proj_.github_url} className="font_icon detail_link" target="_blank">
        <strong>Source:</strong> <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>;
    }
    return(
        <Container className="section duty">
               <a href={proj_.url} target="_blank" className="detail_link"> <strong >{proj_.name}</strong> </a>
            <Row>
                <strong className="detail_pro_name">Basic project introduction:</strong>
                <Col xs='12' sm md='12' lg='12'>
                    <p className="tx-left">{proj_.detail_intro}</p>
                </Col>
                <strong className="key_word">KEY WORDS:{keyword_list}.</strong> 
                <strong>Responsibilities:</strong>
                <Col xs='12' sm md='12' lg='12'>
                <p className="tx-left">{proj_.conclustion}</p>
                   <ul className="duty_exp"> 
                   {list_intro} 
                   </ul>
                </Col>
            </Row>
            
            <Row>
                {git}
            </Row>
            <Row>
                <Col lg='12'><small>Pics:</small></Col>
                
                <Col xs='12' sm md='12' lg='6'>
                    <img src={proj_.detail_code_pic} className='duty_pic'></img>
                </Col>
                <Col xs='12' sm md='12' lg='6'>
                <img src= {proj_.detail_pic} className='duty_pic'></img>
                </Col>
            </Row>
        </Container>
    );
}
export default Duty;