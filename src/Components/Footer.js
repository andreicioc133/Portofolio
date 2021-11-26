import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

function Footer() {
    return (
        <Row className="rows">
            <Col xs={12} sm={12} md={12} lg={12} xxl={12} className="centeredColumn">
                <p className="normalText">
                    @ Made by Cioc Andrei
                </p>
            </Col>
        </Row>  
    )
}

export default Footer
