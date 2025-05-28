import React from 'react';
import { Card } from 'react-bootstrap';

const Business = () => {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={business.imageSrc} alt="image" />
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