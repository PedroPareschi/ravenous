import React from 'react';
import 'whatwg-fetch'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BusinessList from "./components/BusinessList/BusinessList.jsx";
import styles from './App.module.css';

const App = () => {
  const [businesses, setBusinesses] = React.useState([]);

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar onSubmit={setBusinesses}/>
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
