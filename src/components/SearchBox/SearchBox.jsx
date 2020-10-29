import React from "react";
import styles from './SearchBox.module.scss'
import { Link } from "@reach/router";

const SearchBox = (props) => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="type your beer type" onInput={(e) => {
          props.getBeersByName(e.target.value);
        }}/>
        <Link to="SignUp">
          <p>Sign up here</p>
        </Link>
    </div>
  );
};

export default SearchBox;
