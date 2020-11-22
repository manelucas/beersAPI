import React, { useState, useEffect } from "react";
import BoozeList from "./components/BoozeList";
import styles from "./App.module.scss";
// import SearchBox from './components/SearchBox/SearchBox';
// import Routes from './components/Routes';
import firebase from "./firebase";
import Navbar from "./components/Navbar";

const App = () => {
  const [beers, setBeers] = useState([]);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // getUser();
    getBeers();
  }, []);

  const getBeers = async (searchTerm) => {
    const url = await searchTerm ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}` : "https://api.punkapi.com/v2/beers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
      });
  };

  // const signIn = () => {
  //   firebase.auth().signInWithRedirect(provider);
  // };

  // const signOut = () => {
  //   firebase.auth().signOut();
  //   console
  //     .log("Am i working")
  //     .then(() => {
  //       setUser(null);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const getUser = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // };

  return (
    <main className={styles.main}>
      <Navbar getBeers={getBeers} />
      <BoozeList beers={beers} />
    </main>
  );
};

{
  /* <Navbar getBeersByName={getBeersByName} signIn={signIn} user={user} signOut={signOut}/> */
}

export default App;
