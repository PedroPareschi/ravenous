import React from 'react';
import Business from './Business.jsx';
import {Col, Container, Row} from "react-bootstrap";

const BusinessList = () => {
    return (
        <Container className="mt-4" fluid>
            <Row>
                {Array.from({length: 9}).map((_, index) => (<Col key={index} xs={12} sm={6} md={4} lg={3}
                                                                 className="mb-4">
                    <Business/>
                </Col>))}
            </Row>
        </Container>
    )
}

export default BusinessList;