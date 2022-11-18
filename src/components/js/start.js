import React from "react";
import { Form, useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap";
import SelectPlayers from "./selectplayers";

function Start() {

    let navigate = useNavigate()

    return (
        <Container id="fullscreen">
            <Row>
            <div id= "page-wrap" align="center">
                {/* <Header /> */}
                <br />
                <h1>START</h1>
                <p>
                    88888888888888888888888888888888888888888888888888888
                    888888888888888888888LET'S GO888888888888888888888888
                    88888888888888888888888888888888888888888888888888888

                </p>
            </div>
            </Row>

            <Row >
                <Col md={{ span: 3, offset: 3 }} align="center">
                    <button onClick={()=> navigate('/SelectPlayers')}>STARTO!</button>  
                </Col>  
            </Row>
            
           
        </Container>

    )
}
export default Start