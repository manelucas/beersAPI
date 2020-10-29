import React, {useState, useEffect} from 'react';
import BoozeList from './components/BoozeList'
import styles from './App.module.scss';
import SearchBox from './components/SearchBox/SearchBox';
import Routes from './components/Routes';

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
        console.log("getBeers was called");
      });
  };

  const getBeersByName = (searchTerm) => {
    fetch("https://api.punkapi.com/v2/beers?beer_name=" + searchTerm)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
        console.log("getBeersByName was called");
      });
  };

  useEffect(() => {
    getBeers();
    console.log("Use effect was called");
  }, []);

  return (
      <main className={styles.main}>
        <SearchBox getBeersByName={getBeersByName} />
        <BoozeList beers={beers} />
      </main>
  );
};

export default App;
