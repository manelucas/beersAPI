import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Punk Beers</h1>
      </div>
      <SearchBox getBeers={props.getBeers} />
    </section>
  );
};

export default Navbar;
