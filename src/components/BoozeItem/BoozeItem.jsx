import React from "react";
import styles from "./BoozeItem.module.scss";

const BoozeItem = (props) => {
  const { name, image_url, description, abv } = props.beer;

  const shortenDescription = (description) => {
   return description.length < 100
      ? description
      : description.substring(0, description.lastIndexOf(".", 190)) + ".";
  }

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <img src={image_url} alt="beer empire" />
        <p className={styles.description}>{shortenDescription(description)}</p>
        <p className={styles.abv}>ABV: {abv}</p>
    </div>
  );
};

export default BoozeItem;
