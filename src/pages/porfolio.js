import React from 'react';
import Pcard from '../components/card_portf';
import Data from '../static/data'

import { faMagnet } from '@fortawesome/free-solid-svg-icons';
import { Container,Row,Col } from 'react-bootstrap';


 function Portfolio(){
    const pros = Data.projects.map(
        (singlepro, index) => 
        <Pcard pro={singlepro} key={index}></Pcard>
        // <Pcard name={pro.name} intro={pro.intro} link_url={pro.link} duties={pro.pro_list} pic_url={pro.pic_url} pro_link={pro.url} key_str={pro.tags}></Pcard>
    );
     return(  
        <Container className="section">
                <Col xs='12' lg='12'>
                    <Row>
                    {pros}    
                    </Row> 
                </Col>
                <Col>
                    <strong>To be continued...</strong>
                </Col>
        </Container>
    
     );
 }
 export default Portfolio;