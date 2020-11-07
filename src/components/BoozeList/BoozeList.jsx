import React from "react";
import BoozeItem from "../BoozeItem";
import styles from "./BoozeList.module.scss";

const BoozeList = (props) => {
  return (
    <section>
      {props.beers.map((beer) => {
        return <BoozeItem key={beer.id} beer={beer} />;
      })}
    </section>
  );
};

export default BoozeList;
