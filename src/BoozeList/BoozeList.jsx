import React from 'react'
import BoozeItems from '../BoozeItems'

const BoozeList = (props) => {

    console.log(props.beers)
    return (
        <>
        <div>
            <p>hey!</p>
        </div>
          {/* {props.beers.map(beer => {
            return <div><BoozeItems beer={beer}/></div>
          })} */}
        </>
      )
}

export default BoozeList