import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.sushi.img_url === '' ? () => {} : (e) => props.sushiPlateClick(props.sushi, e)}>
        {props.sushi.img_url === '' ? null : <img src={props.sushiImg} width="100%" alt=""/>}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
