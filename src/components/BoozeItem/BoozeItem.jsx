import React from 'react'
import styles from './BoozeItem.module.scss'

const BoozeItem = (props) => {
    
    const { name, image_url, description } = props.beer

    // let shortDescription = (description) => {
    //     return description.length < 100 
    //     ? description
    //     : description.subString(0, 100) + "...";    
    // }

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h2>{name}</h2>
            </div>
            <img src={image_url} alt="beer empire"/>
            <p>{description}</p>
        </div>
    )
}

export default BoozeItem