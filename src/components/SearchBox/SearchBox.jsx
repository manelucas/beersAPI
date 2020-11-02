import React from "react";
import styles from './SearchBox.module.scss'
import { Link } from "@reach/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = (props) => {

  const {signIn, signOut, user} = props

  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="type your beer type" onInput={(e) => {
          props.getBeersByName(e.target.value);
        }}/>
      <span user={user}>
        <button onClick={signIn}>Sign In</button>
      </span>
      <span user={user}>
        <button onClick={signOut}>Sign Out</button>
      </span>
    </div>
  );
};

export default SearchBox;
