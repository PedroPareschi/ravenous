import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './Business.module.css';

const Business = props => {
    const business = props.business;
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={business.imageSrc} alt="image" className={styles.squareImg} />
            <Card.Body>
                <Card.Title>{business.name}</Card.Title>
                <Card.Text>
                    {business.address}<br/>
                    {business.city}, {business.state} {business.zipCode}<br/>
                    <strong>{business.category.toUpperCase()}</strong><br/>
                    {business.rating} stars ({business.reviewCount} reviews)
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Business;