import React from 'react';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function Project(props) {
  return (
    <Row className={props.rowclass} >
      <Col xs={12} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} className={props.parent_class}>
        {/* <a href={"/portfolio/" + props.name}> */}
        <Image src={props.src} className={props.class}></Image>
        {/* </a> */}
        <div className='middle pd-35'>
          <ButtonGroup className="me-2 mr-10" >
            {props.livelink && <a href={props.livelink} target="_blank"><Button variant='warning'>Live</Button></a>}
          </ButtonGroup>
          <ButtonGroup className="me-2 mr-10" >
            {props.git && <a href={props.gitlink} target="_blank"><Button variant='secondary'>GitHub</Button></a>}
          </ButtonGroup>
          <ButtonGroup className="me-2 mr-10" >
            <a href={"/portfolio/" + props.link}>
              <Button variant='success'>What I Did</Button>
            </a>
          </ButtonGroup>

        </div>
      </Col>
      <Col xs={12} md={{ span: 7 }} lg={{ span: 7 }}>
        <h4 className='capital'>{props.name}</h4>
        <strong>{props.intro}</strong>

        <ul>
          {props.pro_list.map((li, idx) => (
            <li key={idx} className="capital">{li}</li>
          ))}
        </ul>
        <b>Tech Stacks:</b> <br />
        {props.skills.map((kw, idx) => (
          <>
            <Badge className='bg-success' key={kw}>{kw}</Badge>{' '}
          </>
        ))}
        <div className='pd-10px'>
          <ButtonGroup className="me-2" >
            {props.livelink && <a href={props.livelink} target="_blank"><Button variant='warning'>Live</Button></a>}
          </ButtonGroup>
          <ButtonGroup className="me-2" >
            {props.git && <a href={props.gitlink} target="_blank"><Button variant='secondary'>GitHub</Button></a>}
          </ButtonGroup>
          <ButtonGroup className="me-2" >
            <a href={"/portfolio/" + props.link}>
              <Button variant='success'>Detail</Button>
            </a>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  )
}
export default Project;