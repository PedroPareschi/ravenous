import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar.jsx";
import BusinessList from "./components/BusinessList.jsx";

const businesses = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
        name: 'Burger Bonanza',
        address: '2020 Sesame Street',
        city: 'Meatville',
        state: 'CA',
        zipCode: '90210',
        category: 'American',
        rating: 4.2,
        reviewCount: 120
    },
    {
        imageSrc: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
        name: 'Sakura Sushi',
        address: '3030 Nori Lane',
        city: 'Seaville',
        state: 'WA',
        zipCode: '98101',
        category: 'Japanese',
        rating: 4.8,
        reviewCount: 200
    },
    {
        imageSrc: 'https://images.pexels.com/photos/1352262/pexels-photo-1352262.jpeg',
        name: 'Steak & Barrel',
        address: '4040 Angus Avenue',
        city: 'Grilltown',
        state: 'TX',
        zipCode: '73301',
        category: 'Steakhouse',
        rating: 4.6,
        reviewCount: 85
    },
    {
        imageSrc: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
        name: 'Taco Fiesta',
        address: '5050 Salsa Street',
        city: 'Crunch City',
        state: 'NM',
        zipCode: '87501',
        category: 'Mexican',
        rating: 4.3,
        reviewCount: 150
    }
];


function App() {
    return (
        <div className="bg-light min-vh-100 py-4">
            <div className="text-center mb-4">
                <h1>Business Finder</h1>
            </div>
            <SearchBar/>
            <BusinessList businesses={businesses} />
        </div>
    );
}

export default App;
