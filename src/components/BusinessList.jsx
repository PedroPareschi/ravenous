import React from 'react';
import Business from './Business.jsx';
import {Col, Container, Row} from "react-bootstrap";

const BusinessList = props => {
    return (
        <Container className="mt-4" fluid>
            <Row>
                {props.businesses.map((business, index) => (<Col key={index} xs={12} sm={6} md={4} lg={3}
                                                                 className="mb-4">
                    <Business business={business} />
                </Col>))}
            </Row>
        </Container>
    )
}

export default BusinessList;