import React from 'react'
import BoozeItem from '../BoozeItem'

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

