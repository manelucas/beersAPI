import React from "react";
import FilterList from "../FilterList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Punk Beers</h1>
      <SearchBox getBeers={props.getBeers} />
      <FilterList />
    </div>
  );
};

export default Navbar;
