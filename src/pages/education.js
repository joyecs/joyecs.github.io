import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faGraduationCap, faAward, faPeopleCarry, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'



function Education(props){
    return (
        <div className="container text-left">
            <strong>   <FontAwesomeIcon icon={faGraduationCap}/> &nbsp; California State University, San Bernardino  &nbsp; &nbsp;
            <FontAwesomeIcon icon={faSearchLocation}/> &nbsp;MI, USA</strong>      
            <br></br>Degree and Field: MS IST 2021-2023
            <br></br>Courses: Python, Database Structure, Cyber Security.
            <br></br> GPA: <span className="badge badge-success">Excellent</span> <br></br><br></br>
            <ProgressBar animated now={90} variant='success'/> 
            <hr></hr>
            <strong>   <FontAwesomeIcon icon={faGraduationCap}/> &nbsp; Andrews University  &nbsp; &nbsp;
            <FontAwesomeIcon icon={faSearchLocation}/> &nbsp;MI, USA</strong>      
            <br></br>Degree and Field: MBA 2018-2019
            <br></br>Courses: Leadership, Marketing, Economics, Financial Management, etc.
            <br></br> GPA: <span className="badge badge-success">Excellent</span> <br></br><br></br>
            <ProgressBar animated now={98} variant='success'/> 
            <hr></hr>
            <strong>  <FontAwesomeIcon icon={faGraduationCap}/>&nbsp; Guangzhou Medical University  &nbsp; &nbsp;
            <FontAwesomeIcon icon={faSearchLocation}/>  &nbsp;Guangzhou, CN</strong>
            <br></br>Degree and Field: Infomation Management and Information System     
            <br></br>Courses: C#, Java, Database, Operation System, Network Security, etc.  
            <br></br>GPA: <span className="badge badge-info">Good</span> <br></br><br></br>
            <ProgressBar animated now={75} variant="info"/> 
            <div className='volunteer'>
                <strong>   <FontAwesomeIcon icon={faAward}/> &nbsp; Volunteer  &nbsp; &nbsp; </strong>
                <p>
                <FontAwesomeIcon icon={faPeopleCarry}/>&nbsp; Charity Store Product Assistant, Berrien Springs, Michigan
                </p>
                <ul>
                    <li>Organized, cleaned and priced products in the stores.</li>
                    <li>Managed and organized donations from people around the county.</li>
                </ul>
                <p>
                <FontAwesomeIcon icon={faBriefcaseMedical}/>&nbsp;&nbsp;Guangzhou Marathon Physicals Assistant, Guangzhou, China
                </p>
                <ul>
                    <li>Performed CPR for Guangzhou Marathon runners in need along the route.</li>
                    <li>Followed the physicians' instructions and provided medical services.</li>
                    <li>Gave away water and energy supplement and provided assistance with recovery</li>
                </ul>
            </div>
        </div>
    );
}
export default Education;