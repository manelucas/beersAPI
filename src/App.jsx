import React, {useState, useEffect} from 'react';
import BoozeList from './components/BoozeList'
import styles from './App.module.scss';
import SearchBox from './components/SearchBox/SearchBox';
// import Routes from './components/Routes';
import firebase, { provider } from "./firebase";

const App = () => {
  const [beers, setBeers ] = useState([]);
  const [user, setUser] = useState(null);

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


  
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      console.log('Am i working')
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  })

  return (
      <main className={styles.main}>
        <SearchBox getBeersByName={getBeersByName} signIn={signIn} user={user} signOut={signOut}/>
        <BoozeList beers={beers} />
      </main>
  );
};

export default App;
