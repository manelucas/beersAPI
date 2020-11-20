import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Beer me in mind"
        onInput={(e) => {
          props.getBeers(e.target.value);
        }}
      />
    </div>
  );
};

{
  /* <span user={user}>
        <button onClick={signIn}>Sign In</button>
      </span>
      <span user={user}>
        <button onClick={signOut}>Sign Out</button>
      </span> */
}

export default SearchBox;
