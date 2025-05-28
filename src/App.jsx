import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar.jsx";
import BusinessList from "./components/BusinessList.jsx";

function App() {
    return (
        <div className="bg-light min-vh-100 py-4">
            <div className="text-center mb-4">
                <h1>Business Finder</h1>
            </div>
            <SearchBar />
            <BusinessList />
        </div>
    );
}

export default App;
