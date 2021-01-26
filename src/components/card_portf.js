import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Pcard(props){
    // import pic_ from props.pro.pic_url;
    const responsibilities = props.pro.pro_list;
    const list_duty = responsibilities.map((duty, index)=> 
    <span className="card_list" key={index} >{duty}</span>
    );
    return(
        <div className="f1_container col-lg-4 col-sm-12  col-md-6 hanno">
        <div className="f1_card" className="shadow">
            <Card>
                <Card.Title>
                <a href={props.pro.url} target="_blank">
                <Card.Img variant="top" src={props.pro.pic_url} className="img_thumb"/>
                            {/* {props.pro.name} */}
                                {/* <img src={props.pro.pic_url} alt=""
                                    className="img_thumb" /> */}
                        </a> <br></br>
                </Card.Title>
                <Card.Text>
                <span className="card_list" ><strong>{props.pro.intro}</strong></span>
                {list_duty}
                <span className="card_list" ><strong>Skills:</strong></span>
                <span className="card_list" >{props.pro.tags}</span>
                    <a href={"/#/detail/" + props.pro.link}>
                    <Button variant="outline-primary">
                        Quick View
                    </Button>
                    </a>
                </Card.Text>
            </Card>
        </div>
    </div>

    );
}
export default Pcard;