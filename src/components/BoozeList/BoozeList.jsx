import React from 'react'
import BoozeItem from '../BoozeItem'
import styles from './BoozeList.module.scss'

const BoozeList = (props) => {

return (
    <>
      <section>
        {props.beers.map(beer => {
          return <div><BoozeItem key={beer.id} beer={beer}/></div>
        })}
      </section>
    </>
  )
}


export default BoozeList

