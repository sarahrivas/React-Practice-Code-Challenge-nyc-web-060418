import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x.id} className="empty-plate" style={{ top: -10 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.consumedSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
