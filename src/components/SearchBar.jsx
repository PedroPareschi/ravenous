import React from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <Container className="my-4">
            <Form>
                <Row className="g-2 align-items-center">
                    <Col xs={12} md={4}>
                        <Form.Control type="text" placeholder="Search business" className="shadow-sm" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Form.Control type="text" placeholder="Location" className="shadow-sm" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Form.Select className="shadow-sm">
                            <option value="bestMatch">Best Match</option>
                            <option value="highestRated">Highest Rated</option>
                            <option value="mostReviewed">Most Reviewed</option>
                            <option value="distance">Distance</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} md={2}>
                        <Button variant="primary" type="submit" className="w-100">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SearchBar;