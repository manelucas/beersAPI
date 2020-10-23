import React, {useState} from 'react';
import BoozeList from './BoozeList'
import './App.module.scss';

const App = () => {

  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getBeers();
  return (
    <div>
      {/* <p>Hello</p> */}
      {/* <BoozeList beers={beers}/> */}
      {/* <Navbar searchbeers={beers}/> */}
    </div>
  );
}

export default App;


