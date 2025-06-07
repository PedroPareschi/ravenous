import React from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = () => {

    const [selectedSortBy, setSelectedSortBy] = React.useState("best_match");

    const handleSortByChange = (sortByOption) => {
        setSelectedSortBy(sortByOption);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li className={selectedSortBy === sortByOptionValue ? styles.active : ""}
                onClick={() => handleSortByChange(sortByOptionValue)} key={sortByOptionValue}>
                {sortByOption}
            </li>;
        });
    };

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const [location, setLocation] = React.useState("");

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSubmitClick = () => {
        if (searchTerm.trim() === "" || location.trim() === "") {
            alert("Please enter both search term and location.");
            return;
        }
        console.log(`Searching for "${searchTerm}" in "${location}" sorted by "${selectedSortBy}"`);
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input onChange={handleSearchTermChange} placeholder="Search Businesses" />
                <input onChange={handleLocationChange} placeholder="Where?" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a onClick={handleSubmitClick}>Let's Go</a>
            </div>
        </div>
    );
};

export default SearchBar;