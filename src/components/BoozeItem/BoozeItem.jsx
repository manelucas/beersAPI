import React from "react";
import styles from "./BoozeItem.module.scss";

const BoozeItem = (props) => {
  const { name, image_url, description, abv } = props.beer;

  // let shortDescription = (description) => {
  //     return description.length < 100
  //     ? description
  //     : description.subString(0, 100) + "...";
  // }

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <img src={image_url} alt="beer empire" />
      <p className={styles.abv}>ABV: {abv}</p>
      <hr />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BoozeItem;
