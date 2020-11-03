import React from 'react';
import FilterList from '../FilterList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './Navbar.module.scss'

const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            <SearchBox getBeersByName={props.getBeersByName}/>
            <FilterList />
        </div>
    )
}

export default Navbar